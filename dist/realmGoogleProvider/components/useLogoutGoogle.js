var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FacebookLoginClient } from "@greatsumini/react-facebook-login";
import { useAuth } from "@llampukaq/realm";
import { googleLogout } from "@react-oauth/google";
function useLogoutGoogle() {
    const { logout } = useAuth();
    return {
        logout: () => __awaiter(this, void 0, void 0, function* () {
            logout === null || logout === void 0 ? void 0 : logout();
            googleLogout === null || googleLogout === void 0 ? void 0 : googleLogout();
            FacebookLoginClient === null || FacebookLoginClient === void 0 ? void 0 : FacebookLoginClient.logout(() => { });
        }),
    };
}
export default useLogoutGoogle;
