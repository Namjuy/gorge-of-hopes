import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export class AuthenticationService {
  // Define HttpHeaders with 'Content-Type' set to 'application/json'
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  // Inject the HttpClient service into the constructor
  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Method to handle login
   * @param username
   * @param password
   * @returns
   */
  login(username: string, password: string): Observable<any> {
    const loginUrl = `http://localhost:5159/AuthenApi/login`;
    return this.http.post(
      loginUrl,
      { username, password },
      { responseType: 'text' }
    );
  }

  /**
   * Method to handle logout
   */
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  /**
   * Method to check authentication
   */
  checkAuth(): void {
    var token = localStorage.getItem('jwtToken');

    if (token) {
      const decodedToken = this.decodeToken(token);
      if (decodedToken) {
        if (!this.isTokenExpired(decodedToken)) {
          localStorage.clear();
          this.router.navigate(['/home']);
        } else {
          if (
            Number(
              decodedToken[
                'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
              ]
            ) == 0
          ) {
            this.router.navigate(['/user-management']);
          } else {
            this.router.navigate(['/home']);
          }
        }
      } else {
        // Handle the case where decoding fails
        this.router.navigate(['/login']);
      }
    } else {
      // No token, navigate to the login page
      this.router.navigate(['/login']);
    }
  }

  /**
   * Decode token
   * @param token
   * @returns
   */
  public decodeToken = (token: string): any => {
    // Split the token into segments
    const segments = token.split('.');

    // Extract the base64Url part
    const base64Url = segments[1];

    // Replace characters for decoding
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    // Decode the base64 string and handle URL encoding
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    // Parse the JSON payload
    return JSON.parse(jsonPayload);
  };

  /**
   * Check token expiration
   * @param token
   * @returns
   */
  public isTokenExpired(token: any): boolean {
    const expiration = new Date(token.exp * 1000);
    const currentTime = Date.now();
    const expirationPlus24Hours = currentTime + 24 * 60 * 60 * 1000;

    return expiration.getTime() < expirationPlus24Hours;
  }
}
