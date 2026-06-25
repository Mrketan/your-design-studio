import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Mail, c as Flag, d as Building2, f as ArrowUpRight, h as ChartLine, i as Search, l as Compass, m as Earth, n as Share2, o as GraduationCap, p as UsersRound, r as Send, s as Globe, t as Users, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as motion, i as useMotionValue, n as useTransform, r as useScroll, t as useSpring } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BB5IF0L5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Rectangle_2236_default = "/assets/Rectangle%202236-CJSBhpys.png";
var Frame_22_default = "/assets/Frame%2022-Cvkkj0oM.png";
var Frame_27_default = "/assets/Frame%2027-BIzTgEXI.png";
function ServiceCard({ title, body, variant, iconType, delay = 0 }) {
	const isDark = variant === "dark";
	const Icon = iconType === "building" ? Building2 : Users;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-50px"
		},
		transition: {
			duration: .6,
			delay
		},
		className: `relative aspect-square rounded-[24px] p-8 flex flex-col justify-between overflow-hidden shadow-sm transition-transform hover:-translate-y-1 ${isDark ? "bg-[#060D1E]" : "bg-[#E0DFDF]"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `w-10 h-10 rounded-full border flex items-center justify-center ${isDark ? "border-white/30 text-white" : "border-[#FF2A2A]/40 text-[#FF2A2A]"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 stroke-[1.5]" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: `w-5 h-5 ${isDark ? "text-white" : "text-[#FF2A2A]"}` })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: `text-[18px] md:text-[20px] font-bold mb-3 ${isDark ? "text-[#FF2A2A]" : "text-[#111111]"}`,
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `text-[13px] md:text-[14px] leading-relaxed font-medium ${isDark ? "text-white/80" : "text-[#333333]"}`,
			children: body
		})] })]
	});
}
function BentoSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-50px"
				},
				transition: { duration: .8 },
				className: "relative w-full h-[300px] md:h-[400px] rounded-[24px] overflow-hidden mb-16 md:mb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Rectangle_2236_default,
						alt: "Team collaborating",
						className: "absolute inset-0 w-full h-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-white text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6 drop-shadow-md",
							children: [
								"Helping the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif italic font-normal text-transparent",
									style: { WebkitTextStroke: "1.5px white" },
									children: "best"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"be more than"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							whileHover: { scale: 1.05 },
							whileTap: { scale: .95 },
							className: "inline-flex items-center gap-3 bg-[#FF2A2A] text-white rounded-xl px-6 py-3.5 font-bold text-[15px] shadow-lg hover:bg-[#E52525] transition-colors",
							children: ["Explore our bussiness impact", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-5 h-5 stroke-[2.5]" })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-50px"
				},
				transition: { duration: .6 },
				className: "flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-[40px] font-bold leading-[1.1] text-ink tracking-tight",
					children: [
						"Why HR Leaders and",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#FF2A2A]",
							children: "Business Executives"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"partner with us"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-[400px] md:pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[14px] md:text-[15px] text-[#555555] font-medium leading-relaxed md:text-right",
						children: "Real stories of organizations that redefined their growth trajectory through our advisory services."
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
						title: "Organisations & Enterprises",
						body: "Receive a comprehensive report outlining risks, capability gaps, and actionable steps for sustained organizational impact.",
						variant: "dark",
						iconType: "building",
						delay: .1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .95
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: {
							once: true,
							margin: "-50px"
						},
						transition: {
							duration: .6,
							delay: .2
						},
						className: "aspect-square rounded-[24px] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Frame_22_default,
							alt: "Client portrait",
							className: "w-full h-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
						title: "Insight Review Section",
						body: "Receive a comprehensive report outlining risks, capability gaps, and actionable steps for sustained organizational impact.",
						variant: "light",
						iconType: "users",
						delay: .3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
						title: "Business Owner & CEOs",
						body: "Receive a comprehensive report outlining risks, capability gaps, and actionable steps for sustained organizational impact.",
						variant: "light",
						iconType: "users",
						delay: .1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
						title: "Gov & Public Sector",
						body: "Receive a comprehensive report outlining risks, capability gaps, and actionable steps for sustained organizational impact.",
						variant: "dark",
						iconType: "building",
						delay: .2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .95
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: {
							once: true,
							margin: "-50px"
						},
						transition: {
							duration: .6,
							delay: .3
						},
						className: "aspect-square rounded-[24px] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Frame_27_default,
							alt: "Client portrait",
							className: "w-full h-full object-cover"
						})
					})
				]
			})
		]
	});
}
var vitaly_gariev_0kWem6X0Mc8_unsplash_1__1__default = "/assets/vitaly-gariev-0kWem6X0Mc8-unsplash%201%20(1)-370PKEHE.png";
function DiagnosticSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-50px"
			},
			transition: { duration: .6 },
			className: "flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-3xl md:text-[40px] font-bold leading-[1.1] text-ink tracking-tight",
				children: [
					"Apex Global Diagnostic ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#FF2A2A]",
						children: "Assessment"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-[450px] md:pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[14px] md:text-[15px] text-ink/80 text-left md:text-right font-medium leading-relaxed",
					children: "Gain actionable insights through data-driven assessments, enabling smarter decisions and measurable organizational growth."
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-50px"
			},
			transition: { duration: .8 },
			className: "bg-[#E4E4E4] rounded-[24px] p-5 md:p-6 flex flex-col md:flex-row gap-8 md:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full md:w-[50%] h-[300px] md:h-auto min-h-[400px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: vitaly_gariev_0kWem6X0Mc8_unsplash_1__1__default,
					alt: "Diagnostic Assessment",
					className: "w-full h-full object-cover rounded-[16px]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full md:w-[50%] flex flex-col justify-center py-4 md:py-8 pr-4 lg:pr-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 mb-10 text-[#444444] font-medium text-[15px] md:text-[17px] leading-relaxed tracking-wide",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gain a comprehensive understanding of your organization's performance with our advanced diagnostic assessment." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We analyze key strengths, identify critical gaps, and uncover opportunities for improvement through a structured evaluation process." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our data-driven insights help you make informed decisions, optimize strategies, and drive sustainable growth." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					whileHover: { scale: 1.05 },
					whileTap: { scale: .95 },
					className: "self-start md:self-center bg-[#FF2A2A] text-white px-6 py-2.5 rounded-full text-[14px] font-bold flex items-center gap-2 hover:bg-[#E52525] transition-colors shadow-sm",
					children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4 stroke-[2]" })]
				})]
			})]
		})]
	});
}
var CARDS = [
	{
		id: "talent",
		title: "TALENT",
		icon: Users,
		color: "from-[#10B981]/20 to-transparent",
		borderColor: "border-[#10B981]/40",
		hoverBorderColor: "border-[#10B981]",
		textColor: "text-[#10B981]",
		description: "Attract, develop and retain\nthe right talent to drive\nsustainable growth."
	},
	{
		id: "leadership",
		title: "LEADERSHIP",
		icon: Flag,
		color: "from-[#3B82F6]/20 to-transparent",
		borderColor: "border-[#3B82F6]/40",
		hoverBorderColor: "border-[#3B82F6]",
		textColor: "text-[#3B82F6]",
		description: "Build inspired leaders who\nempower teams and accelerate\norganizational success."
	},
	{
		id: "culture",
		title: "CULTURE",
		icon: UsersRound,
		color: "from-[#8B5CF6]/20 to-transparent",
		borderColor: "border-[#8B5CF6]/40",
		hoverBorderColor: "border-[#8B5CF6]",
		textColor: "text-[#8B5CF6]",
		description: "Create a purpose-driven culture\nwhere people thrive and\nperformance excels."
	},
	{
		id: "future-skill",
		title: "FUTURE SKILL",
		icon: GraduationCap,
		color: "from-[#14B8A6]/20 to-transparent",
		borderColor: "border-[#14B8A6]/40",
		hoverBorderColor: "border-[#14B8A6]",
		textColor: "text-[#14B8A6]",
		description: "Build future-ready skills\nto adapt, innovate and\nlead in a changing world."
	},
	{
		id: "performance",
		title: "PERFORMANCE",
		icon: ChartLine,
		color: "from-[#0EA5E9]/20 to-transparent",
		borderColor: "border-[#0EA5E9]/40",
		hoverBorderColor: "border-[#0EA5E9]",
		textColor: "text-[#0EA5E9]",
		description: "Drive high performance through\nclear goals, feedback and\ncontinuous improvement."
	},
	{
		id: "workforce",
		title: "WORKFORCE\nPLANNING",
		icon: Search,
		color: "from-[#A855F7]/20 to-transparent",
		borderColor: "border-[#A855F7]/40",
		hoverBorderColor: "border-[#A855F7]",
		textColor: "text-[#A855F7]",
		description: "Align the right people to the\nright roles to support future\nbusiness needs."
	}
];
var particles$1 = Array.from({ length: 20 }).map((_, i) => ({
	id: i,
	size: Math.random() * 4 + 2,
	top: `${Math.random() * 100}%`,
	left: `${Math.random() * 100}%`,
	duration: Math.random() * 10 + 10,
	delay: Math.random() * 5
}));
function CapabilitiesSection() {
	const [hoveredId, setHoveredId] = (0, import_react.useState)(null);
	const containerRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"]
	});
	const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
	const yContent = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
	const scaleCenter = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		.8,
		1,
		.8
	]);
	const opacityCenter = useTransform(scrollYProgress, [
		0,
		.3,
		.7,
		1
	], [
		0,
		1,
		1,
		0
	]);
	const isHovered = (id) => hoveredId === id || hoveredId === "center";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: containerRef,
		className: "py-24 bg-[#020617] overflow-hidden flex justify-center items-center relative font-sans w-full min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: { y: yBg },
			className: "absolute inset-0 pointer-events-none z-0",
			children: particles$1.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					y: [
						0,
						-50,
						0
					],
					opacity: [
						.1,
						.6,
						.1
					],
					scale: [
						1,
						1.5,
						1
					]
				},
				transition: {
					duration: p.duration,
					repeat: Infinity,
					delay: p.delay,
					ease: "easeInOut"
				},
				className: "absolute rounded-full bg-white/20 blur-[1px]",
				style: {
					width: p.size,
					height: p.size,
					top: p.top,
					left: p.left,
					boxShadow: "0 0 10px rgba(255,255,255,0.3)"
				}
			}, p.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			style: { y: yContent },
			className: "w-full max-w-[1200px] mx-auto px-6 relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: {
						scale: [
							1,
							1.2,
							1
						],
						opacity: [
							.3,
							.6,
							.3
						],
						rotate: [
							0,
							90,
							0
						]
					},
					transition: {
						duration: 15,
						repeat: Infinity,
						ease: "easeInOut"
					},
					className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#3B82F6]/10 via-[#8B5CF6]/10 to-[#10B981]/10 rounded-full blur-[120px] pointer-events-none transition-all duration-700 ${hoveredId ? "scale-125 opacity-80" : ""}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
					initial: {
						opacity: 0,
						scale: .8
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: {
						once: true,
						margin: "-100px"
					},
					transition: {
						duration: 1.5,
						type: "spring",
						bounce: .2
					},
					className: "absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
              @keyframes line-flow {
                to { stroke-dashoffset: -24; }
              }
              .flowing-line {
                stroke-dasharray: 6 6;
                animation: line-flow 1.5s linear infinite;
              }
            ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						strokeWidth: 1.5,
						className: "transition-all duration-300 flowing-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: `transition-all duration-300 ${isHovered("talent") ? "opacity-100 drop-shadow-[0_0_12px_#10B981]" : "opacity-30"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "50%",
										y1: "50%",
										x2: "35%",
										y2: "50%",
										className: `stroke-[#10B981] ${isHovered("talent") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "35%",
										y1: "50%",
										x2: "35%",
										y2: "20%",
										className: `stroke-[#10B981] ${isHovered("talent") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "35%",
										y1: "20%",
										x2: "16.66%",
										y2: "20%",
										className: `stroke-[#10B981] ${isHovered("talent") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "16.66%",
										cy: "20%",
										r: isHovered("talent") ? 6 : 3,
										className: "fill-[#10B981] transition-all duration-300"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "35%",
										cy: "50%",
										r: isHovered("talent") ? 5 : 3,
										className: "fill-[#3B82F6] transition-all"
									}),
									isHovered("talent") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										r: "5",
										fill: "#fff",
										className: "drop-shadow-[0_0_10px_#fff]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
											dur: "1s",
											repeatCount: "indefinite",
											path: "M 600 400 L 420 400 L 420 160 L 200 160"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: `transition-all duration-300 ${isHovered("future-skill") ? "opacity-100 drop-shadow-[0_0_12px_#14B8A6]" : "opacity-30"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "50%",
										y1: "50%",
										x2: "35%",
										y2: "50%",
										className: `stroke-[#14B8A6] ${isHovered("future-skill") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "35%",
										y1: "50%",
										x2: "35%",
										y2: "80%",
										className: `stroke-[#14B8A6] ${isHovered("future-skill") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "35%",
										y1: "80%",
										x2: "16.66%",
										y2: "80%",
										className: `stroke-[#14B8A6] ${isHovered("future-skill") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "16.66%",
										cy: "80%",
										r: isHovered("future-skill") ? 6 : 3,
										className: "fill-[#14B8A6] transition-all duration-300"
									}),
									isHovered("future-skill") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										r: "5",
										fill: "#fff",
										className: "drop-shadow-[0_0_10px_#fff]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
											dur: "1s",
											repeatCount: "indefinite",
											path: "M 600 400 L 420 400 L 420 640 L 200 640"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: `transition-all duration-300 ${isHovered("leadership") ? "opacity-100 drop-shadow-[0_0_12px_#3B82F6]" : "opacity-30"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "50%",
										y1: "50%",
										x2: "50%",
										y2: "20%",
										className: `stroke-[#3B82F6] ${isHovered("leadership") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "50%",
										cy: "20%",
										r: isHovered("leadership") ? 6 : 3,
										className: "fill-[#3B82F6] transition-all duration-300"
									}),
									isHovered("leadership") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										r: "5",
										fill: "#fff",
										className: "drop-shadow-[0_0_10px_#fff]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
											dur: "0.6s",
											repeatCount: "indefinite",
											path: "M 600 400 L 600 160"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: `transition-all duration-300 ${isHovered("performance") ? "opacity-100 drop-shadow-[0_0_12px_#0EA5E9]" : "opacity-30"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "50%",
										y1: "50%",
										x2: "50%",
										y2: "80%",
										className: `stroke-[#0EA5E9] ${isHovered("performance") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "50%",
										cy: "80%",
										r: isHovered("performance") ? 6 : 3,
										className: "fill-[#0EA5E9] transition-all duration-300"
									}),
									isHovered("performance") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										r: "5",
										fill: "#fff",
										className: "drop-shadow-[0_0_10px_#fff]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
											dur: "0.6s",
											repeatCount: "indefinite",
											path: "M 600 400 L 600 640"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: `transition-all duration-300 ${isHovered("culture") ? "opacity-100 drop-shadow-[0_0_12px_#8B5CF6]" : "opacity-30"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "50%",
										y1: "50%",
										x2: "65%",
										y2: "50%",
										className: `stroke-[#8B5CF6] ${isHovered("culture") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "65%",
										y1: "50%",
										x2: "65%",
										y2: "20%",
										className: `stroke-[#8B5CF6] ${isHovered("culture") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "65%",
										y1: "20%",
										x2: "83.33%",
										y2: "20%",
										className: `stroke-[#8B5CF6] ${isHovered("culture") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "83.33%",
										cy: "20%",
										r: isHovered("culture") ? 6 : 3,
										className: "fill-[#8B5CF6] transition-all duration-300"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "65%",
										cy: "50%",
										r: isHovered("culture") ? 5 : 3,
										className: "fill-[#8B5CF6] transition-all"
									}),
									isHovered("culture") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										r: "5",
										fill: "#fff",
										className: "drop-shadow-[0_0_10px_#fff]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
											dur: "1s",
											repeatCount: "indefinite",
											path: "M 600 400 L 780 400 L 780 160 L 1000 160"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: `transition-all duration-300 ${isHovered("workforce") ? "opacity-100 drop-shadow-[0_0_12px_#A855F7]" : "opacity-30"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "50%",
										y1: "50%",
										x2: "65%",
										y2: "50%",
										className: `stroke-[#A855F7] ${isHovered("workforce") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "65%",
										y1: "50%",
										x2: "65%",
										y2: "80%",
										className: `stroke-[#A855F7] ${isHovered("workforce") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "65%",
										y1: "80%",
										x2: "83.33%",
										y2: "80%",
										className: `stroke-[#A855F7] ${isHovered("workforce") ? "stroke-2" : ""}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "83.33%",
										cy: "80%",
										r: isHovered("workforce") ? 6 : 3,
										className: "fill-[#A855F7] transition-all duration-300"
									}),
									isHovered("workforce") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										r: "5",
										fill: "#fff",
										className: "drop-shadow-[0_0_10px_#fff]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
											dur: "1s",
											repeatCount: "indefinite",
											path: "M 600 400 L 780 400 L 780 640 L 1000 640"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "50%",
								cy: "50%",
								r: "5",
								className: `fill-white drop-shadow-[0_0_20px_white] transition-transform duration-500 ${hoveredId ? "scale-[2]" : "scale-100 animate-[pulse_2s_ease-in-out_infinite]"}`
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row items-center justify-center gap-6 relative z-10 w-full mb-6 perspective-[1000px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkCard, {
							...CARDS[0],
							index: 0,
							setHoveredId,
							hoveredId
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkCard, {
							...CARDS[1],
							index: 1,
							setHoveredId,
							hoveredId
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkCard, {
							...CARDS[2],
							index: 2,
							setHoveredId,
							hoveredId
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: {
						scale: scaleCenter,
						opacity: opacityCenter
					},
					className: "relative flex items-center justify-center my-10 md:my-14 z-30 w-full cursor-pointer",
					onMouseEnter: () => setHoveredId("center"),
					onMouseLeave: () => setHoveredId(null),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute w-[200px] h-[70px] md:w-[320px] md:h-[100px] border rounded-[4rem] pointer-events-none transition-colors duration-500 animate-[pulse_2s_ease-in-out_infinite] ${hoveredId === "center" ? "border-[#3B82F6]/90 shadow-[0_0_50px_rgba(59,130,246,0.6)]" : "border-white/10"}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute w-[180px] h-[60px] md:w-[280px] md:h-[80px] border rounded-[3rem] pointer-events-none transition-colors duration-500 animate-[pulse_2s_ease-in-out_infinite_400ms] ${hoveredId === "center" ? "border-[#10B981]/80 shadow-[0_0_40px_rgba(16,185,129,0.5)]" : "border-white/20"}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute w-[160px] h-[50px] md:w-[240px] md:h-[60px] border rounded-[2rem] pointer-events-none transition-colors duration-500 animate-[pulse_2s_ease-in-out_infinite_800ms] ${hoveredId === "center" ? "border-white shadow-[0_0_30px_rgba(255,255,255,0.9)]" : "border-[#3B82F6]/50"}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `bg-[#020617] border rounded-[2rem] px-8 md:px-10 py-3 md:py-4 transition-all duration-300 relative z-20 ${hoveredId === "center" ? "border-white shadow-[0_0_80px_rgba(255,255,255,0.5)] scale-110" : "border-white/30 shadow-[0_0_40px_rgba(59,130,246,0.2)]"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: `text-center font-bold text-[12px] md:text-[14px] tracking-[0.2em] leading-tight drop-shadow-md transition-colors duration-300 ${hoveredId === "center" ? "text-white" : "text-slate-200"}`,
								children: [
									"HUMAN",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"CAPABILITY"
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row items-center justify-center gap-6 relative z-10 w-full mt-6 perspective-[1000px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkCard, {
							...CARDS[3],
							index: 3,
							setHoveredId,
							hoveredId
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkCard, {
							...CARDS[4],
							index: 4,
							setHoveredId,
							hoveredId
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkCard, {
							...CARDS[5],
							index: 5,
							setHoveredId,
							hoveredId
						})
					]
				})
			]
		})]
	});
}
function NetworkCard({ id, title, icon: Icon, color, borderColor, hoverBorderColor, textColor, description, index = 0, setHoveredId, hoveredId }) {
	const isHovered = hoveredId === id || hoveredId === "center";
	const isDimmed = hoveredId !== null && hoveredId !== id && hoveredId !== "center";
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const mouseXSpring = useSpring(x, {
		stiffness: 300,
		damping: 30
	});
	const rotateX = useTransform(useSpring(y, {
		stiffness: 300,
		damping: 30
	}), [-.5, .5], ["15deg", "-15deg"]);
	const rotateY = useTransform(mouseXSpring, [-.5, .5], ["-15deg", "15deg"]);
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		const xPct = mouseX / width - .5;
		const yPct = mouseY / height - .5;
		x.set(xPct);
		y.set(yPct);
	};
	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
		setHoveredId(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		animate: { y: [
			0,
			-12,
			0
		] },
		transition: { y: {
			duration: 5,
			repeat: Infinity,
			ease: "easeInOut",
			delay: index * .3
		} },
		className: "w-full max-w-[280px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref,
			style: {
				rotateX,
				rotateY,
				transformStyle: "preserve-3d"
			},
			initial: {
				opacity: 0,
				scale: .8,
				y: 50,
				rotateX: 20
			},
			whileInView: {
				opacity: 1,
				scale: 1,
				y: 0,
				rotateX: 0
			},
			viewport: {
				once: true,
				margin: "-50px"
			},
			transition: {
				duration: .8,
				delay: index * .15,
				type: "spring"
			},
			onMouseMove: handleMouseMove,
			onMouseEnter: () => setHoveredId(id),
			onMouseLeave: handleMouseLeave,
			className: `relative w-full h-[340px] bg-[#0A1229]/70 backdrop-blur-xl rounded-[1rem] border flex flex-col items-center p-8 text-center overflow-hidden cursor-pointer transition-all duration-500 
          ${isHovered ? hoverBorderColor : borderColor}
          ${isDimmed ? "opacity-30 scale-[0.95] grayscale-[70%]" : "opacity-100"}
          ${isHovered ? "shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-50 scale-105" : "shadow-xl z-10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"}
        `,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-b ${color} transition-all duration-700 ${isHovered ? "opacity-80 scale-110" : "opacity-20"}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -inset-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transition-transform duration-[2s] ${isHovered ? "translate-x-[150%]" : "-translate-x-[150%]"}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex flex-col items-center w-full mt-4",
					style: { transform: "translateZ(30px)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `w-20 h-20 rounded-full border transition-all duration-500 flex items-center justify-center mb-8 relative z-10 ${isHovered ? "border-white/80 bg-white/10 scale-125 shadow-[0_0_40px_rgba(255,255,255,0.2)]" : "border-white/20"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: `w-8 h-8 transition-colors duration-300 ${isHovered ? "text-white drop-shadow-[0_0_8px_white]" : textColor}`,
								strokeWidth: 1.5
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { rotate: 360 },
								transition: {
									duration: isHovered ? 1.5 : 10,
									repeat: Infinity,
									ease: "linear"
								},
								className: `absolute inset-[-4px] rounded-full border transition-colors duration-500 ${isHovered ? "border-white/50" : "border-white/10"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -right-[3px] top-4 w-2 h-2 rounded-full bg-current transition-colors duration-300 ${isHovered ? "text-white shadow-[0_0_15px_white]" : `${textColor} shadow-[0_0_6px_currentColor]`}` })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: `text-[15px] font-bold transition-all duration-300 mb-5 tracking-widest relative z-10 ${isHovered ? "text-white scale-110 drop-shadow-[0_0_8px_white]" : textColor}`,
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `text-[12px] md:text-[13px] font-medium leading-[1.6] whitespace-pre-line relative z-10 transition-colors duration-300 ${isHovered ? "text-white font-semibold" : "text-slate-400"}`,
							children: description
						})
					]
				})
			]
		})
	});
}
var b665c412_7380_4649_92ca_6af9953476d1_1_default = "/assets/b665c412-7380-4649-92ca-6af9953476d1%201-C9CFrK_p.png";
var unsplash_I5sXsH0WqcE_default = "/assets/unsplash_I5sXsH0WqcE-CSb7nsvH.png";
function CapitaLensInsightSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-[#F4F7FC] py-16 md:py-24 font-sans w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-50px"
			},
			transition: { duration: .6 },
			className: "w-full max-w-[1200px] mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-3xl md:text-[40px] font-bold text-[#111111] leading-[1.1] tracking-tight",
				children: [
					"Unlock Your ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#FF2A2A]",
						children: "Organization"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"CapitaLens insight"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[14px] md:text-[15px] text-[#444444] font-medium md:text-right mt-6 md:mt-2 max-w-[380px] leading-relaxed",
				children: [
					"Turn meaningful insights into strategi actions",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
					"that drive growth and success."
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-[1000px] mx-auto px-6 md:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 md:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						whileHover: { scale: 1.03 },
						viewport: {
							once: true,
							margin: "-50px"
						},
						transition: {
							duration: .6,
							delay: .1
						},
						src: b665c412_7380_4649_92ca_6af9953476d1_1_default,
						alt: "Insight Review Section",
						className: "w-full max-w-[420px] h-auto object-cover rounded-[16px] self-center md:self-end shadow-sm cursor-pointer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						whileHover: {
							scale: 1.02,
							x: 10
						},
						viewport: {
							once: true,
							margin: "-50px"
						},
						transition: {
							duration: .6,
							delay: .2
						},
						className: "max-w-[420px] self-center md:self-end text-left pr-4 cursor-default",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl md:text-[22px] font-bold text-[#111111] mb-3 tracking-tight",
							children: "Insight Review Section"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] md:text-[15px] text-[#555555] font-medium leading-[1.6]",
							children: "Participate in a focused strategy session to validate priorities and align leadership objectives. Identify high-impact opportunities and gain actionable insights to drive growth and informed decision-making."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 md:gap-10 pt-0 md:pt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						whileHover: {
							scale: 1.02,
							x: 10
						},
						viewport: {
							once: true,
							margin: "-50px"
						},
						transition: {
							duration: .6,
							delay: .3
						},
						className: "max-w-[420px] self-center md:self-start text-left pr-4 cursor-default",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl md:text-[22px] font-bold text-[#111111] mb-3 tracking-tight",
							children: "Organisational Diagnostic"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] md:text-[15px] text-[#555555] font-medium leading-[1.6]",
							children: "Capture comprehensive data across leadership, capability, and performance drivers to create a clear view of your organization's current state."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						whileHover: { scale: 1.03 },
						viewport: {
							once: true,
							margin: "-50px"
						},
						transition: {
							duration: .6,
							delay: .4
						},
						src: unsplash_I5sXsH0WqcE_default,
						alt: "Organisational Diagnostic",
						className: "w-full max-w-[420px] h-auto object-cover rounded-[16px] self-center md:self-start shadow-sm cursor-pointer"
					})]
				})]
			})
		})]
	});
}
var regions = [
	{
		id: "na",
		name: "NORTH AMERICA",
		pinX: 26,
		pinY: 33,
		badgeX: 10,
		badgeY: 33
	},
	{
		id: "uk",
		name: "UK & EUROPE",
		pinX: 47.5,
		pinY: 26,
		badgeX: 40,
		badgeY: 8
	},
	{
		id: "me",
		name: "MIDDLE EAST",
		pinX: 62,
		pinY: 41.5,
		badgeX: 75,
		badgeY: 28
	},
	{
		id: "ap",
		name: "ASIA-PACIFIC",
		pinX: 78,
		pinY: 57,
		badgeX: 92,
		badgeY: 45
	},
	{
		id: "af",
		name: "AFRICA",
		pinX: 53.5,
		pinY: 73,
		badgeX: 45,
		badgeY: 90
	}
];
function GlobalReachSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-16 md:py-24 bg-[#F4F7FC] overflow-hidden flex flex-col justify-center items-center relative w-full font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: { duration: .6 },
				className: "w-full max-w-[1200px] mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start mb-0 md:mb-10 z-10 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-[40px] font-bold text-[#111111] leading-[1.1] tracking-tight",
					children: [
						"Start with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#C82333]",
							children: "insight,"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#C82333]",
							children: "transform"
						}),
						" with certainty"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[14px] md:text-[15px] text-[#555555] font-medium md:text-right mt-6 md:mt-2 leading-relaxed",
					children: [
						"Unlock Your Organisation's CapitaLens Profile",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Our team is ready to help you elevate your",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"human capability strategy."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full max-w-[850px] mx-auto mt-12 md:mt-8 px-4 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full aspect-[2754/1398] mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { opacity: 0 },
							whileInView: { opacity: 1 },
							viewport: {
								once: true,
								margin: "-100px"
							},
							transition: { duration: 1 },
							className: "absolute inset-0 z-10 pointer-events-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg",
								alt: "Global Reach Map",
								className: "w-full h-full object-fill",
								style: {
									opacity: .2,
									filter: "brightness(0) sepia(1) hue-rotate(185deg) saturate(0.5) contrast(0.8)"
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute inset-0 w-full h-full z-20 pointer-events-none overflow-visible",
							children: regions.map((region, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
								x1: `${region.pinX}%`,
								y1: `${region.pinY}%`,
								x2: `${region.badgeX}%`,
								y2: `${region.badgeY}%`,
								stroke: "#C82333",
								strokeWidth: "1.5",
								strokeLinecap: "round",
								className: "opacity-80",
								initial: {
									pathLength: 0,
									opacity: 0
								},
								whileInView: {
									pathLength: 1,
									opacity: .8
								},
								viewport: {
									once: true,
									margin: "-100px"
								},
								transition: {
									duration: 1,
									delay: .2 + index * .15,
									ease: "easeOut"
								}
							}, `line-${region.id}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 w-full h-full z-30 pointer-events-none",
							children: regions.map((region, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									scale: 0,
									opacity: 0
								},
								whileInView: {
									scale: 1,
									opacity: 1
								},
								viewport: {
									once: true,
									margin: "-100px"
								},
								transition: {
									type: "spring",
									stiffness: 200,
									delay: .1 + index * .15
								},
								className: "absolute -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center",
								style: {
									left: `${region.pinX}%`,
									top: `${region.pinY}%`
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute w-[24px] h-[24px] md:w-[32px] md:h-[32px] rounded-full bg-[#C82333] opacity-30 animate-ping",
									style: {
										animationDuration: "2.5s",
										animationDelay: `${index * .4}s`
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-white shadow-[0_0_8px_rgba(200,35,51,0.8)] border-[2px] md:border-[3px] border-[#C82333]" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									scale: .9
								},
								whileInView: {
									opacity: 1,
									scale: 1
								},
								viewport: {
									once: true,
									margin: "-100px"
								},
								transition: {
									duration: .4,
									delay: .7 + index * .15,
									type: "spring",
									bounce: .3
								},
								className: "absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto",
								style: {
									left: `${region.badgeX}%`,
									top: `${region.badgeY}%`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									animate: { y: [
										0,
										-3,
										0
									] },
									transition: {
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut",
										delay: index * .3
									},
									className: "bg-[#C82333] rounded-full px-5 py-2 md:px-6 md:py-2.5 shadow-md border border-white/10 transition-transform hover:scale-105 cursor-pointer hover:shadow-[0_0_15px_rgba(200,35,51,0.6)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white font-bold text-[10px] md:text-[12px] tracking-[0.05em] uppercase whitespace-nowrap",
										children: region.name
									})
								})
							})] }, `nodes-${region.id}`))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: {
					duration: .6,
					delay: .4
				},
				className: "w-full max-w-[1200px] mx-auto px-8 md:px-12 mt-16 md:mt-12 z-10 relative flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[14px] md:text-[16px] text-[#555555] font-medium leading-[1.7] max-w-[900px] text-center flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We help organizations turn valuable insights into focused, high-impact actions." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "By identifying key priorities and aligning them with business objectives, we create clear strategies that drive measurable results." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our approach enables confident decision-making, efficient resource allocation, and sustainable growth." })
					]
				})
			})
		]
	});
}
var unsplash_IsuMgQQ0Tac_default = "/assets/unsplash_IsuMgQQ0Tac-Cz-9twMe.png";
function EthosSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "w-full bg-[#F4F7FC] font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pt-8 pb-16 md:pt-12 md:pb-24 max-w-[1100px] mx-auto px-6 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-50px"
				},
				transition: { duration: .6 },
				className: "text-center mb-12 md:mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-[42px] font-bold leading-[1.1] text-[#111111] tracking-tight mb-5",
					children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#FA3E3E]",
						children: "Ethos"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[15px] md:text-[17px] text-[#4F5662] font-medium max-w-3xl mx-auto leading-relaxed",
					children: "Our ethos is built on integrity, insight, and impact, guiding every partnership and decision we make."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row gap-12 md:gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-50px"
					},
					transition: { duration: .6 },
					className: "w-full md:w-[45%] flex flex-col items-start gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] md:text-[15px] text-[#4F5662] leading-[1.7] font-medium",
							children: "At Apex Global, we believe that people are the driving force behind every successful organization."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] md:text-[15px] text-[#4F5662] leading-[1.7] font-medium",
							children: "Our ethos is built on integrity, excellence, innovation, and partnership."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] md:text-[15px] text-[#4F5662] leading-[1.7] font-medium",
							children: "We are committed to delivering insightful, data-driven solutions that empower businesses to unlock human potential, cultivate exceptional leadership, and create sustainable growth."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							whileHover: { scale: 1.05 },
							whileTap: { scale: .95 },
							className: "mt-2 inline-flex items-center gap-2 bg-[#FF2A2A] hover:bg-[#E52525] text-white rounded-full px-6 py-2.5 text-[13px] font-semibold transition-colors shadow-sm",
							children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-50px"
					},
					transition: { duration: .6 },
					className: "w-full md:w-[55%]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-[24px] overflow-hidden shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: unsplash_IsuMgQQ0Tac_default,
							alt: "Smiling woman holding coffee and papers",
							className: "w-full h-[350px] md:h-[420px] object-cover object-center"
						})
					})
				})]
			})]
		})
	});
}
var _106340_672600365_default = "/assets/106340-672600365-CHaVlJi_.mp4";
var particles = Array.from({ length: 15 }).map((_, i) => ({
	id: i,
	size: Math.random() * 4 + 2,
	top: `${Math.random() * 100}%`,
	left: `${Math.random() * 100}%`,
	duration: Math.random() * 8 + 12,
	delay: Math.random() * 5
}));
function DedicatedPartnerSection() {
	const containerRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"]
	});
	const opacityVideo = useTransform(scrollYProgress, [0, 1], [1, .2]);
	const opacityContent = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const titleWords = "Intelligent Workforce Solutions for High-Growth Entities.".split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: containerRef,
		className: "relative w-full h-screen min-h-[750px] flex flex-col font-sans overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity: opacityVideo },
				className: "absolute inset-0 w-full h-full bg-[#111111]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					autoPlay: true,
					loop: true,
					muted: true,
					playsInline: true,
					className: "absolute inset-0 w-full h-full object-cover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: _106340_672600365_default,
						type: "video/mp4"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 pointer-events-none z-0",
				children: particles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: {
						y: [
							0,
							-60,
							0
						],
						x: [
							0,
							Math.random() * 40 - 20,
							0
						],
						opacity: [
							0,
							.8,
							0
						],
						scale: [
							.8,
							1.5,
							.8
						]
					},
					transition: {
						duration: p.duration,
						repeat: Infinity,
						delay: p.delay,
						ease: "easeInOut"
					},
					className: "absolute rounded-full bg-white/30 blur-[2px]",
					style: {
						width: p.size,
						height: p.size,
						top: p.top,
						left: p.left,
						boxShadow: "0 0 10px rgba(255,255,255,0.5)"
					}
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "relative z-20 w-full flex items-center justify-between px-6 md:px-12 lg:px-20 py-8 mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[160px] hidden lg:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:flex flex-1 items-center justify-center gap-10 text-[15px] font-medium text-white/95",
						children: [
							"CapitalLens",
							"Capability Centre",
							"Advisory Hub",
							"Talent Mapping",
							"Insights"
						].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: "#",
							className: "relative group hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]",
							whileHover: { y: -2 },
							children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" })]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-[160px] flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							whileHover: {
								scale: 1.05,
								boxShadow: "0 0 20px rgba(255, 42, 42, 0.6)"
							},
							whileTap: { scale: .95 },
							className: "relative overflow-hidden bg-[#FF2A2A] text-white px-6 py-2.5 rounded-[12px] text-[14px] font-bold transition-all shadow-lg group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative z-10",
								children: "Book Advisory"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1s]" })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { opacity: opacityContent },
				className: "relative z-10 flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 w-full mx-auto pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-5xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -30
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								duration: .8,
								type: "spring",
								bounce: .4
							},
							className: "inline-flex items-center gap-3 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-[2px] bg-[#FF2A2A]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[16px] md:text-[18px] text-white/95 font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
								children: "Strategic Talent Alignment"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-5xl md:text-[72px] lg:text-[84px] font-bold text-white leading-[1.05] tracking-tight mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]",
							children: titleWords.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									y: 30,
									filter: "blur(10px)"
								},
								animate: {
									opacity: 1,
									y: 0,
									filter: "blur(0px)"
								},
								transition: {
									duration: .8,
									delay: i * .1,
									type: "spring",
									bounce: .2
								},
								className: "inline-block mr-4 mb-2",
								children: word === "High-Growth" || word === "Entities." ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400",
									children: word
								}) : word
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .6
							},
							className: "text-[17px] md:text-[21px] text-white/90 font-medium tracking-wide leading-relaxed max-w-[800px] mb-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]",
							children: [
								"Move beyond traditional recruitment. We utilize deep diagnostic data ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
								"and talent intelligence to align your human capital with long-term ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
								"strategic objectives."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .8
							},
							className: "flex flex-col sm:flex-row items-center gap-4 md:gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								whileHover: {
									scale: 1.05,
									boxShadow: "0 0 30px rgba(255,42,42,0.6)"
								},
								whileTap: { scale: .95 },
								animate: { y: [
									0,
									-5,
									0
								] },
								transition: { y: {
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut"
								} },
								className: "w-full sm:w-auto relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#FF2A2A] text-white rounded-[12px] px-8 py-3.5 font-bold text-[16px] shadow-lg group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative z-10 flex items-center gap-2",
									children: ["Begin Diagnostic", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-5 h-5 stroke-[2.5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1s]" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								whileHover: {
									scale: 1.05,
									backgroundColor: "rgba(255,255,255,0.1)",
									boxShadow: "0 0 20px rgba(255,255,255,0.2)"
								},
								whileTap: { scale: .95 },
								animate: { y: [
									0,
									-5,
									0
								] },
								transition: { y: {
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
									delay: .5
								} },
								className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 border-[1.5px] border-white/70 text-white rounded-[12px] px-8 py-3.5 font-semibold text-[16px] transition-all backdrop-blur-sm group",
								children: ["Talk to an Advisor", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "w-5 h-5 stroke-[2] group-hover:rotate-45 transition-transform duration-500" })]
							})]
						})
					]
				})
			})
		]
	});
}
var photo_1672819030357_464e40e5abd8_1_default = "/assets/photo-1672819030357-464e40e5abd8%201-CU_5o_nc.png";
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-[#C5CCD9] pt-16 md:pt-24 relative overflow-hidden font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-50px"
			},
			transition: { duration: .6 },
			className: "text-center mb-10 md:mb-12 relative z-10 px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-3xl md:text-[42px] font-bold leading-[1.1] tracking-tight mb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#FA3E3E]",
						children: "Ready to Build"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#333A44]",
						children: "a Strong Organisation"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[15px] md:text-[17px] text-[#4F5662] font-medium max-w-[850px] mx-auto leading-relaxed",
				children: [
					"Whether you're developing leaders, planning your workforce, or searching for critical",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
					" talent, Apex Global provides the insights and expertise to help you move forward with",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
					" confidence."
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1050px] mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-6 md:gap-8 items-end relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: {
					once: true,
					margin: "-50px"
				},
				transition: { duration: .6 },
				className: "w-full md:w-[45%] flex justify-center md:justify-end relative z-20 md:-ml-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo_1672819030357_464e40e5abd8_1_default,
					alt: "Smiling woman pointing",
					className: "w-[90%] md:w-[120%] max-w-[500px] object-contain -mb-1 transform translate-y-1"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: {
					once: true,
					margin: "-50px"
				},
				transition: { duration: .6 },
				className: "w-full md:w-[55%] bg-white rounded-[24px] p-8 md:p-10 shadow-sm mb-12 md:mb-16 relative z-30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[18px] md:text-[22px] font-bold text-[#111111] mb-8",
					children: "Request an Advisory Session"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-bold text-[#111111]",
									children: "Full Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Enter your name",
									className: "border border-[#E2E8F0] rounded-lg px-4 py-3 text-[13px] placeholder-[#A0AEC0] focus:outline-none focus:border-[#FA3E3E] bg-[#FAFCFF]"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[12px] font-bold text-[#111111]",
									children: "Company"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Enter company name",
									className: "border border-[#E2E8F0] rounded-lg px-4 py-3 text-[13px] placeholder-[#A0AEC0] focus:outline-none focus:border-[#FA3E3E] bg-[#FAFCFF]"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[12px] font-bold text-[#111111]",
								children: "Service of Interest"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-[13px] text-[#4F5662] focus:outline-none focus:border-[#FA3E3E] bg-[#FAFCFF] appearance-none cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Executive Coaching" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Workforce Planning" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Talent Acquisition" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4 text-[#A0AEC0]" })
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[12px] font-bold text-[#111111]",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 4,
								placeholder: "How can we help your organization?",
								className: "w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-[13px] placeholder-[#A0AEC0] focus:outline-none focus:border-[#FA3E3E] bg-[#FAFCFF] resize-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							type: "button",
							whileHover: { scale: 1.02 },
							whileTap: { scale: .98 },
							className: "mt-2 w-full flex items-center justify-center gap-2 bg-[#FF2A2A] hover:bg-[#E52525] text-white rounded-lg px-6 py-4 text-[14px] font-bold transition-colors shadow-sm",
							children: ["Send Request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[12px] opacity-90 tracking-tighter",
								children: "▷"
							})]
						})
					]
				})]
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "w-full bg-[#040E30] font-sans text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-[1200px] mx-auto px-8 md:px-12 pt-16 pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-50px"
							},
							transition: {
								duration: .6,
								delay: .1
							},
							className: "flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-[14px] font-bold text-white mb-5",
									children: "Apex Global"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] text-white/70 leading-[1.6] mb-6 max-w-[240px]",
									children: "Strategic human capital advisory for the digital-first enterprise."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-white hover:text-white/80 transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
												size: 18,
												strokeWidth: 2.5
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-white hover:text-white/80 transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
												size: 18,
												strokeWidth: 2.5
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-white hover:text-white/80 transition-colors",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
												size: 18,
												strokeWidth: 2.5
											})
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-50px"
							},
							transition: {
								duration: .6,
								delay: .2
							},
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-[14px] font-bold text-white mb-5",
								children: "Navigation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "flex flex-col gap-4 text-[13px] text-white/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "hover:text-white transition-colors",
										children: "CapitalLens"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "hover:text-white transition-colors",
										children: "Capability Centre"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "hover:text-white transition-colors",
										children: "Growth Advisory Hub"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "hover:text-white transition-colors",
										children: "Talent Mapping"
									}) })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-50px"
							},
							transition: {
								duration: .6,
								delay: .3
							},
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-[14px] font-bold text-white mb-5",
								children: "Company"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "flex flex-col gap-4 text-[13px] text-white/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "hover:text-white transition-colors",
										children: "Careers"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "hover:text-white transition-colors",
										children: "Global Offices"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "hover:text-white transition-colors",
										children: "Privacy Policy"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "hover:text-white transition-colors",
										children: "Terms of Service"
									}) })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-50px"
							},
							transition: {
								duration: .6,
								delay: .4
							},
							className: "flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-[14px] font-bold text-white mb-5",
									children: "Newsletter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] text-white/70 mb-4",
									children: "Insights delivered to your inbox."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "flex w-full max-w-[280px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										placeholder: "Email address",
										className: "w-full px-3 py-2 text-[13px] bg-transparent text-white border border-white/20 border-r-0 rounded-l-[4px] focus:outline-none placeholder:text-white/40"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
										whileHover: { scale: 1.05 },
										whileTap: { scale: .95 },
										type: "button",
										className: "bg-[#FF2A2A] text-white px-4 py-2 rounded-r-[4px] flex items-center justify-center hover:bg-[#E52525] transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
											size: 16,
											strokeWidth: 2
										})
									})]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full h-px bg-white/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-[#030A24]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					whileInView: { opacity: 1 },
					viewport: { once: true },
					transition: {
						duration: .6,
						delay: .6
					},
					className: "max-w-[1200px] mx-auto px-8 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] text-white/50",
						children: "© 2024 Apex Global Consultancy. All rights reserved."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6 text-[13px] text-white/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white transition-colors",
							children: "Cookie Policy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white bg-white/10 hover:bg-white/20 transition-colors px-2 py-0.5 rounded",
							children: "Security"
						})]
					})]
				})
			})
		]
	});
}
var uae_default = "/assets/uae-DTOAxIcB.png";
var africa_default = "/assets/africa-DoWvS0io.png";
var gulf_default = "/assets/gulf-CM3liGim.png";
function ReachCard({ region, image, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative rounded-[2rem] overflow-hidden aspect-[3/4] md:aspect-[4/5] group",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: region,
				className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-4 left-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full px-6 py-2 font-bold tracking-wide shadow-sm",
					children: region
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-4 right-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "backdrop-blur-xl bg-white/10 border border-white/20 rounded-[1.5rem] p-5 md:p-6 flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/90 text-sm leading-relaxed font-medium",
						children: description
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						whileHover: { scale: 1.05 },
						whileTap: { scale: .95 },
						className: "self-start inline-flex items-center justify-between bg-[#FF2A2A] text-white rounded-full pl-5 pr-3 py-2 font-semibold text-sm transition-colors hover:bg-[#E52525]",
						children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 ml-2 opacity-70" })]
					})]
				})
			})
		]
	});
}
function LogoPill() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 bg-[#0A1D3A] rounded-[1rem] px-5 py-3 min-w-max shadow-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "text-[#4E9FFF] h-8 w-8 stroke-[1.5]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col leading-tight border-l border-white/20 pl-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-white font-bold text-lg",
				children: "Apex Global"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#4E9FFF] font-semibold text-[15px]",
				children: "Consultancy"
			})]
		})]
	});
}
function GlanceSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pt-8 pb-16 md:pt-12 md:pb-24 bg-[#F2F5F9]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-50px"
				},
				transition: { duration: .6 },
				className: "max-w-4xl mx-auto px-6 text-center mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-[40px] font-bold leading-[1.1] tracking-tight mb-6 text-ink",
					children: [
						"Apex Global ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#FF2A2A]",
							children: "Consultancy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"at a Glance"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[14px] md:text-[15px] text-ink/80 font-medium leading-relaxed",
					children: "Apex Global Consultancy is a premium Human Capital, Talent Intelligence, Workforce Advisory, and Leadership Consulting firm helping organizations across the GCC and international markets build high-performing, future-ready workforces. We combine data-driven insights, strategic expertise, and industry knowledge to empower businesses with smarter talent decisions, stronger leadership, and sustainable growth."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full bg-[#020617] py-8 overflow-hidden flex flex-nowrap shadow-inner border-y border-[#0A1D3A]/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-6 pr-6 animate-[marquee_30s_linear_infinite] whitespace-nowrap shrink-0",
					children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoPill, {}, `pill-1-${i}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-6 pr-6 animate-[marquee_30s_linear_infinite] whitespace-nowrap shrink-0",
					"aria-hidden": "true",
					children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoPill, {}, `pill-2-${i}`))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full mt-20 md:mt-28 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-50px"
					},
					transition: { duration: .6 },
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl md:text-[40px] font-bold leading-[1.1] tracking-tight mb-6 text-ink",
						children: [
							"Global ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#FF2A2A]",
								children: "Strategic"
							}),
							" Reach"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[14px] md:text-[15px] text-ink/80 font-medium leading-relaxed max-w-4xl mx-auto mb-12 md:mb-16",
						children: "Apex Global Capita and Apex Global Talent are powered by a trusted network of partners spanning the Gulf, United Kingdom, Europe, Africa, and the United States. Our regional presence enables us to combine international best practices with deep local market understanding, delivering tailored, high-impact solutions that are globally informed and locally relevant."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full overflow-hidden flex flex-nowrap pb-12 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-6 pr-6 animate-[marquee_35s_linear_infinite] shrink-0 group-hover:[animation-play-state:paused]",
						children: Array.from({ length: 2 }).map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: [
							{
								region: "UAE",
								image: uae_default,
								description: "Driving innovation and high-performance leadership across the United Arab Emirates."
							},
							{
								region: "AFRICA",
								image: africa_default,
								description: "Empowering emerging markets with sustainable talent strategies and growth insights."
							},
							{
								region: "THE GULF",
								image: gulf_default,
								description: "Connecting dynamic organizations with top-tier talent throughout the Gulf region."
							},
							{
								region: "UNITED KINGDOM",
								image: uae_default,
								description: "Delivering world-class executive search and workforce advisory in the UK."
							},
							{
								region: "UNITED STATES",
								image: africa_default,
								description: "Transforming human capital landscapes across North American enterprises."
							}
						].map((data, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 w-[85vw] md:w-[350px] text-left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReachCard, {
								region: data.region,
								image: data.image,
								description: data.description
							})
						}, index)) }, `reach-set-1-${idx}`))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-6 pr-6 animate-[marquee_35s_linear_infinite] shrink-0 group-hover:[animation-play-state:paused]",
						"aria-hidden": "true",
						children: Array.from({ length: 2 }).map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: [
							{
								region: "UAE",
								image: uae_default,
								description: "Driving innovation and high-performance leadership across the United Arab Emirates."
							},
							{
								region: "AFRICA",
								image: africa_default,
								description: "Empowering emerging markets with sustainable talent strategies and growth insights."
							},
							{
								region: "THE GULF",
								image: gulf_default,
								description: "Connecting dynamic organizations with top-tier talent throughout the Gulf region."
							},
							{
								region: "UNITED KINGDOM",
								image: uae_default,
								description: "Delivering world-class executive search and workforce advisory in the UK."
							},
							{
								region: "UNITED STATES",
								image: africa_default,
								description: "Transforming human capital landscapes across North American enterprises."
							}
						].map((data, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 w-[85vw] md:w-[350px] text-left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReachCard, {
								region: data.region,
								image: data.image,
								description: data.description
							})
						}, index)) }, `reach-set-2-${idx}`))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      ` } })
		]
	});
}
var Rectangle_2238__2__default = "/assets/Rectangle%202238%20(2)-bxRxG2N5.png";
var _661cadbb_4a90_4c8b_82ca_262bbc796b66_1_default = "/assets/661cadbb-4a90-4c8b-82ca-262bbc796b66%201-TGKLxwoH.png";
var vitaly_gariev_3_gj1U72tiQ_unsplash_1_default = "/assets/vitaly-gariev-3-gj1U72tiQ-unsplash%201-CgdKUN7k.png";
var vitaly_gariev_yd_RKGH_RH4_unsplash_1_default = "/assets/vitaly-gariev-yd_RKGH_RH4-unsplash%201-uxeUs0W_.png";
function TalentCard({ title, description, image, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-50px"
		},
		transition: {
			duration: .6,
			delay
		},
		className: "flex flex-col items-center text-center gap-4 group cursor-pointer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full rounded-[1.5rem] overflow-hidden aspect-[3/4] mb-2 shadow-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: title,
					className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-[17px] md:text-[20px] font-bold text-ink leading-tight px-2",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] md:text-[14px] text-ink/80 font-medium px-2 md:px-4 leading-[1.6]",
				children: description
			})
		]
	});
}
function MethodologySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-8 pb-16 md:pt-10 md:pb-24 bg-[#F2F5F9] font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-50px"
					},
					transition: { duration: .6 },
					className: "flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl md:text-[40px] font-bold leading-[1.1] text-ink tracking-tight",
						children: [
							"The AGC ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#FF2A2A]",
								children: "Methodology"
							}),
							" : ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Where Capital grow ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#FF2A2A]",
								children: "Talent"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-[400px] md:pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] md:text-[15px] text-ink/80 text-left md:text-right font-medium leading-[1.6]",
							children: "Gain actionable insights through data-driven assessments, enabling smarter decisions and measurable organizational growth."
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					whileHover: { scale: 1.01 },
					viewport: {
						once: true,
						margin: "-50px"
					},
					transition: { duration: .8 },
					className: "bg-[#DFDCD8] rounded-[2rem] p-4 md:p-6 flex flex-col md:flex-row gap-8 md:gap-12 items-stretch mb-24 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full md:w-[45%] flex flex-col justify-center gap-6 md:gap-8 pt-4 md:pt-0 pb-10 px-6 md:pl-10 md:pr-4 z-10 order-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 text-[15px] md:text-[16px] text-ink/85 leading-relaxed font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gain a comprehensive understanding of your organization's performance with our advanced diagnostic assessment." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We analyze key strengths, identify critical gaps, and uncover opportunities for improvement through a structured evaluation process." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our data-driven insights help you make informed decisions, optimize strategies, and drive sustainable growth." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							whileHover: { scale: 1.05 },
							whileTap: { scale: .95 },
							className: "mt-2 inline-flex items-center gap-2 bg-[#FF2A2A] hover:bg-[#E52525] text-white rounded-full px-7 py-3 font-semibold transition-colors shadow-md self-start",
							children: ["Read More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 stroke-[3]" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full md:w-[55%] rounded-[1.5rem] overflow-hidden order-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Rectangle_2238__2__default,
							alt: "AGC Methodology Board",
							className: "w-full h-[300px] md:h-[450px] object-cover object-center"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-50px"
					},
					transition: { duration: .6 },
					className: "flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl md:text-[40px] font-bold leading-[1.1] text-ink tracking-tight max-w-lg",
						children: [
							"Talent Mapping & Strategic",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
							" Placement"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-[320px] md:pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14px] md:text-[15px] text-ink/80 text-left md:text-right font-medium leading-[1.6]",
							children: "Insight-led sourcing to identify niche talent and align critical leadership hires with organisational goals."
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalentCard, {
							title: "Critical Role Coverage",
							description: "Capture high-level data across leadership, capability, and performance drivers to establish your unique ecosystem baseline.",
							image: _661cadbb_4a90_4c8b_82ca_262bbc796b66_1_default,
							delay: .1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalentCard, {
							title: "Market-Mapped Shortlists",
							description: "Gain a granular view of the competitor landscape with evidence-based intelligence and active talent pipelines.",
							image: vitaly_gariev_3_gj1U72tiQ_unsplash_1_default,
							delay: .2
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalentCard, {
							title: "Culture-Aligned Placements",
							description: "Ensure every strategic hire possesses the behavioral drivers and values to thrive within your unique operating model.",
							image: vitaly_gariev_yd_RKGH_RH4_unsplash_1_default,
							delay: .3
						})
					]
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background px-6 md:px-12 py-8 md:py-12 overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-screen relative left-1/2 -translate-x-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DedicatedPartnerSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-screen relative left-1/2 -translate-x-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagnosticSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-screen relative left-1/2 -translate-x-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapabilitiesSection, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-screen relative left-1/2 -translate-x-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapitaLensInsightSection, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-screen relative left-1/2 -translate-x-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalReachSection, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-screen relative left-1/2 -translate-x-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlanceSection, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-screen relative left-1/2 -translate-x-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodologySection, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-screen relative left-1/2 -translate-x-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EthosSection, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-screen relative left-1/2 -translate-x-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-screen relative left-1/2 -translate-x-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			})
		]
	});
}
//#endregion
export { Index as component };
