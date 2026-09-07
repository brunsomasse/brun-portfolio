import { createContext, useContext } from "react";

export const themeTokens = {
  light: {
    bg: "#F5F4EF",
    bgRaised: "#FFFFFF",
    ink: "#15181B",
    inkSoft: "#565C63",
    inkFaint: "#8A8F94",
    line: "#DEDBD2",
    accent: "#2F5D62",
    accentInk: "#F5F4EF",
    pillBg: "#EAE7DD",
    pillInk: "#33413F",
  },
  dark: {
    bg: "#14171A",
    bgRaised: "#1B1F23",
    ink: "#EDEEEC",
    inkSoft: "#A7ACB0",
    inkFaint: "#6C7276",
    line: "#2B3033",
    accent: "#6FBFB0",
    accentInk: "#0F1414",
    pillBg: "#21262A",
    pillInk: "#C7D6D3",
  },
};

export const ThemeContext = createContext({
  dark: false,
  setDark: () => {},
  t: themeTokens.light,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export const NAV_ITEMS = [
  { path: "/about", label: "About" },
  { path: "/work", label: "Work" },
  { path: "/community", label: "Community" },
  { path: "/contact", label: "Contact" },
];

export const ROLE_TITLES = ["DevOps Engineer", "Cloud Engineer", "Telecommunications Engineer"];

export const AVATAR_ASCII_ROWS = [
  "....                                                ",
  "+*###*****+++==----::::......                       ",
  "++#%#%%%%%%%%%#*********************+=====::......  ",
  "*#%#########%##******************#######%%*++++*++++",
  "+#%%###########*************************#%*=+++*++++",
  "*#######*++####*#************************%#+++******",
  "########**+####***+++**##%%%%%%%%%##*++++**++*******",
  "#*#####**#*#%%%**+++*%%@@%@@%%%@@%%%%%*+===+++++****",
  "#**###***#*#@%#****%@@@@@@%@@%%%@%%%%%%%*+=-===+++**",
  "***###****##%#***#%@@%@@@@@@@@@@@@@%%@%%%#*++*******",
  "+++###****####***%@%%%%%%%%%%%%%%%%%%%%%%%#*****++++",
  "+==*#*****###++*#@%*+++=+++++=+++++++++*#%%*+++++**+",
  "+=+*******#**+=+#%*++===================+#%*++++++++",
  "*+*#*****##*+=++*#+++=---========----====*#+++++++++",
  "###******##*==+++*++==============-======+*++++==+++",
  "###*****###*====+*++===-------------====+++==+=-===-",
  "%##***#*##*+====+**++++=:..........:-===++===+=====-",
  "%##*##**##*++===*++==+=++=-:....:-++++==+++-=++++===",
  "%#####**##*++===*==*=+*=-+=-:..:-+=++==+===--==-----",
  "%#########**===+*===-=*=-==+=--===-=*=-+-=+====-:---",
  "%#########*+==-=+=-----===+=---====-::----==--------",
  "%#*##%##%#*+==-++=--------=====------:::-==--------:",
  "#####%%%%#*+=--=*=-------+====--=-::::::-==:-----:::",
  "#####%%%%%*+==++*+=-----==-:...:-=-::::--===-:::::::",
  "%####%%%%#**+###**==--------:::----:::--=+%%#==+::::",
  "%%##*++**##**++%%*++=----=-:::::---::-==+%#*%*#%*==-",
  "##*++***###+*%#%%#*++=+++=--::::-----==+#**%%####%#*",
  "*=*++*#*%@%#+**%@##*+++*++========+++=+#%%%##*##%#++",
  "==*%*=%@@@*+#+*#@@%%#+====-------===+++++++###%#%%+*",
  "*+=-+-*%+++%@@##%%%%%#+===--------==**+#*#%%@%%##%#*",
];

export const SKILLS = [
  "Terraform", "Kubernetes", "GKE", "AKS", "Helm",
  "Azure DevOps", "GCP IAM", "Wiz", "React / TypeScript", "Bash",
  "AWS Certified Solutions Architect", "Oracle Certified Solutions Architect",
];

export const WORK_ITEMS = [
  {
    index: "01",
    title: "GCP IAM least-privilege migration",
    desc: "Consolidated sprawling GCP IAM grants into custom least-privilege roles managed entirely through Terraform, closing a long-running audit gap.",
    tags: ["Terraform", "GCP IAM", "Security"],
    meta: "WEBDEV-1798",
  },
  {
    index: "02",
    title: "Hardcoded secrets remediation",
    desc: "Worked through Wiz findings to strip hardcoded secrets from Helm charts and git history, starting with the devops tier before rolling out through UAT and prod.",
    tags: ["Wiz", "Helm", "Git"],
    meta: "WEBDEV-2255/56",
  },
  {
    index: "03",
    title: "QIR environment lockdown",
    desc: "Built the scale-down / scale-up procedures for Preview environments on IA1 and VA4 GKE clusters around quarterly release lockdowns.",
    tags: ["GKE", "Kubernetes", "Runbooks"],
    meta: "Ongoing",
  },
  {
    index: "04",
    title: "Minigolf tournament scorecard app",
    desc: "A React/TypeScript mobile scorecard app built for the Union des Minigolfeurs du Bénin, used to run live scoring at tournaments.",
    tags: ["React", "TypeScript", "Mobile"],
    meta: "Personal",
  },
];

export const GHOST_SOURCE =
  "terraform gke aks helm kubernetes multi cloud iam least privilege secrets remediation wiz azure devops pipelines runbooks quarterly release lockdown preview environments react typescript scorecard minigolf benin no code web design course automation infrastructure as code";
