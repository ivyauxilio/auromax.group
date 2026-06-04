import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;

// export default [
//   route("/", "root.tsx", [
//     index("routes/home.tsx"),
//     route("about", "routes/about.tsx"), // new page
//   ]),
// ] satisfies RouteConfig;
export default [
  index("routes/home.tsx"), // renders at "/"
  route("about", "routes/about.tsx"), // renders at "/about"
  route("welcome", "welcome/welcome.tsx"), // renders at "/welcome"
  route("services", "routes/services.tsx"),
  // route("our-company", "routes/company.tsx"),
  // route("news-and-opportunities", "routes/news.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
