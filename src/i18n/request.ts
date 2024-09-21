import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
	const cookieLocale = cookies().get("NEXT_LOCALE")?.value as "en" | "de" | undefined;

	const locale = cookieLocale || "en";

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
