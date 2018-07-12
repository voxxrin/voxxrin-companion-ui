import { AuthService } from "../services/auth.service";
import { User } from "../models/user.model";

export abstract class AbstractAuthenticatedComponent {

    public isAuthenticated: boolean;
    public authenticatedUser: User;

    constructor(authService: AuthService) {
        authService.currentUser()
            .subscribe(u => {
                this.isAuthenticated = u != null;
                this.authenticatedUser = u;
            });
    }
}