package com.ohack.sff.security;

import com.ohack.sff.service.AdminUserService;
import com.ohack.sff.service.ClientUserService;
import com.ohack.sff.service.IAdminUserService;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.logging.Logger;

@Component public class JwtRequestFilter extends OncePerRequestFilter {

    private final static Logger LOGGER = Logger.getLogger(JwtRequestFilter.class.getName());
    @Autowired private ClientUserService clientUserService;
    @Autowired private JwtTokenUtil jwtTokenUtil;
    @Autowired private AdminUserService adminUserService;

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        return new AntPathMatcher().match("/admin/token", request.getServletPath());
    }
    @Override protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {

        final String requestTokenHeader = request.getHeader("Authorization");

        String username = null;
        String jwtToken = null;
        // JWT Token is in the form "Bearer token". Remove Bearer word and get
        // only the Token
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
            try {
                username = jwtTokenUtil.getUsernameFromToken(jwtToken);
            } catch (IllegalArgumentException e) {
                LOGGER.info("Unable to get JWT Token");
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                ((HttpServletResponse) response).sendError(HttpServletResponse.SC_FORBIDDEN, "Unable to get JWT Token");
            } catch (ExpiredJwtException e) {
                LOGGER.info("JWT Token has expired");
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                ((HttpServletResponse) response).sendError(HttpServletResponse.SC_FORBIDDEN, "JWT Token has expired");
            }
        } else {
            LOGGER.info("JWT Token does not begin with Bearer String");
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            response.sendError(HttpServletResponse.SC_FORBIDDEN, "No JWT Token sent in request");
        }

        // Once we get the token validate it.
        if (username != null) {
            UserDetails userDetails = null;
            if(request.getServletPath().contains("/admin") || username.equals("admin")){
                userDetails = this.adminUserService.loadUserByUsername(username);
                setSecurityContext(jwtToken, userDetails, request);
            } else {
                userDetails = this.clientUserService.loadUserByUsername(username);
                setSecurityContext(jwtToken, userDetails, request);
            }
            // if token is valid configure Spring Security to manually set
            // authentication


        }

        response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");

        chain.doFilter(request, response);
    }

    private void setSecurityContext(String jwtToken, UserDetails userDetails, HttpServletRequest request){
        if (jwtTokenUtil.validateToken(jwtToken, userDetails)) {

            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            // After setting the Authentication in the context, we specify
            // that the current user is authenticated. So it passes the
            // Spring Security Configurations successfully.
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
        }
    }

}