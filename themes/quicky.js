module.exports = {
    name: "quickyinsomniatheme",
    displayName: "Quicky Insomnia Theme",
    theme: {
        background: {
            default: "#03000A", // background color
            success: "#70e1c8", // POST request, 200 OK, parameter names
            notice: "#f0c000", // PATCH request
            warning: "#ff3284", // PUT request
            danger: "#e5484d", // DELETE request
            surprise: "#9f8dfc", // accent (Dashboard link, GET request,
            // SEND button, branch button, add plugin button)
            info: "#9f8dfc", // OPTIONS and HEAD request
        },
        foreground: {
            default: "#F7F7F8", // primary font color
            success: "#03000A8F", // secondary font color for success background
            notice: "#03000A8F", // secondary font color for notice background
            warning: "#03000A8F", // secondary font color for warning background
            danger: "#03000A8F", // secondary font color for danger background
            surprise: "#03000A8F", // secondary font color for surprise background
            info: "#03000A8F", // secondary font color for info background		},
        },
        highlight: {
            default: "#F7F7F86A",
        },
        styles: {
            sidebar: {
                background: {
                    default: "#03000A30",
                },
            },
            dialog: {
                background: {
                    default: "#03000A",
                },
            },
            transparentOverlay: {
                background: {
                    default: "#9f8dfc02",
                },
            },
        },
    },
};
