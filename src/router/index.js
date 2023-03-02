import { createRouter, createWebHistory } from "vue-router";

import Homex from "../views/Homex.vue";
import Worx from "../views/Worx.vue";
import Services from "../views/Services.vue";
import Agency from "../views/Agency.vue";
import Team from "../views/Team.vue";
import Jobs from "../views/Jobs.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "homex",
			component: Homex,
		},
		{
			path: "/worx",
			name: "worx",
			component: Worx,
		},
		{
			path: "/services",
			name: "services",
			component: Services,
		},
		{
			path: "/agency",
			name: "agency",
			component: Agency,
		},
		{
			path: "/team",
			name: "team",
			component: Team,
		},
		{
			path: "/jobs",
			name: "jobs",
			component: Jobs,
		},
		{
			path: "/contact",
			name: "contact",
			component: Contact,
		},
	],
});

export default router;
