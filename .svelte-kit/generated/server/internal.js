
import root from '../root.svelte';
import { set_assets, set_building, set_private_env, set_public_env, set_version } from '../../../node_modules/@sveltejs/kit/src/runtime/shared.js';

set_version("1676771906139");

export const options = {
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\" class=\"relative h-full antialiased dark\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t" + head + "\n\t\t<script>\n\t\t\tlet darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');\n\n\t\t\tupdateMode();\n\t\t\tdarkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions);\n\t\t\twindow.addEventListener('storage', updateModeWithoutTransitions);\n\n\t\t\tfunction updateMode() {\n\t\t\t\tlet isSystemDarkMode = darkModeMediaQuery.matches;\n\t\t\t\tlet isDarkMode =\n\t\t\t\t\twindow.localStorage.isDarkMode === 'true' ||\n\t\t\t\t\t(!('isDarkMode' in window.localStorage) && isSystemDarkMode);\n\n\t\t\t\tif (isDarkMode) {\n\t\t\t\t\tdocument.documentElement.classList.add('dark');\n\t\t\t\t} else {\n\t\t\t\t\tdocument.documentElement.classList.remove('dark');\n\t\t\t\t}\n\n\t\t\t\tif (isDarkMode === isSystemDarkMode) {\n\t\t\t\t\tdelete window.localStorage.isDarkMode;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction disableTransitionsTemporarily() {\n\t\t\t\tdocument.documentElement.classList.add('[&_*]:!transition-none');\n\t\t\t\twindow.setTimeout(() => {\n\t\t\t\t\tdocument.documentElement.classList.remove('[&_*]:!transition-none');\n\t\t\t\t}, 0);\n\t\t\t}\n\n\t\t\tfunction updateModeWithoutTransitions() {\n\t\t\t\tdisableTransitionsTemporarily();\n\t\t\t\tupdateMode();\n\t\t\t}\n\t\t</script>\n\t</head>\n\n\t<body class=\"h-full bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400\">\n\t\t<div>" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	}
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
