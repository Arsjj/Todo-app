import {useLocation} from "react-router-dom";

function useMenuActiveUrl(paths) {
    const { pathname } = useLocation();
    const pathnames = pathname.split('/');

    return pathnames.filter((p) => paths.includes(p)).pop();
}

export default useMenuActiveUrl;