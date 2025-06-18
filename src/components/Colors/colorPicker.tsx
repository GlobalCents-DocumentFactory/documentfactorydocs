import React, { useState, useEffect } from "react";

const colorGroups = [
    { name: "Reds", colors: ["IndianRed", "LightCoral", "Salmon", "DarkSalmon", "LightSalmon", "Crimson", "Red", "FireBrick", "DarkRed"] },
    { name: "Pinks", colors: ["Pink", "LightPink", "HotPink", "DeepPink", "MediumVioletRed", "PaleVioletRed"] },
    { name: "Oranges", colors: ["Coral", "Tomato", "OrangeRed", "DarkOrange", "Orange"] },
    { name: "Yellows", colors: ["Gold", "Yellow", "LightYellow", "LemonChiffon", "LightGoldenrodYellow", "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenrod", "Khaki", "DarkKhaki"] },
    { name: "Purples", colors: ["Lavender", "Thistle", "Plum", "Violet", "Orchid", "Fuchsia", "Magenta", "MediumOrchid", "MediumPurple", "Amethyst", "BlueViolet", "DarkViolet", "DarkOrchid", "DarkMagenta", "Purple", "Indigo", "SlateBlue", "DarkSlateBlue", "MediumSlateBlue"] },
    { name: "Greens", colors: ["GreenYellow", "Chartreuse", "LawnGreen", "Lime", "LimeGreen", "PaleGreen", "LightGreen", "MediumSpringGreen", "SpringGreen", "MediumSeaGreen", "SeaGreen", "ForestGreen", "Green", "DarkGreen", "YellowGreen", "OliveDrab", "Olive", "DarkOliveGreen", "MediumAquamarine", "DarkSeaGreen", "LightSeaGreen", "DarkCyan", "Teal"] },
    { name: "Blues / Cyans", colors: ["Aqua", "Cyan", "LightCyan", "PaleTurquoise", "Aquamarine", "Turquoise", "MediumTurquoise", "DarkTurquoise", "CadetBlue", "SteelBlue", "LightSteelBlue", "PowderBlue", "LightBlue", "SkyBlue", "LightSkyBlue", "DeepSkyBlue", "DodgerBlue", "CornflowerBlue", "MediumSlateBlue", "RoyalBlue", "Blue", "MediumBlue", "DarkBlue", "Navy", "MidnightBlue"] },
    { name: "Browns", colors: ["Cornsilk", "BlanchedAlmond", "Bisque", "NavajoWhite", "Wheat", "BurlyWood", "Tan", "RosyBrown", "SandyBrown", "Goldenrod", "DarkGoldenrod", "Peru", "Chocolate", "SaddleBrown", "Sienna", "Brown", "Maroon"] },
    { name: "Whites", colors: ["White", "Snow", "Honeydew", "MintCream", "Azure", "AliceBlue", "GhostWhite", "WhiteSmoke", "Seashell", "Beige", "OldLace", "FloralWhite", "Ivory", "AntiqueWhite", "Linen", "LavenderBlush", "MistyRose"] },
    { name: "Greys", colors: ["Gainsboro", "LightGrey", "Silver", "DarkGray", "Gray", "DimGray", "LightSlateGray", "SlateGray", "DarkSlateGray", "Black"] },
];

function getRGB(colorName) {
    const tempElem = document.createElement("div");
    tempElem.style.color = colorName;
    document.body.appendChild(tempElem);
    const rgb = getComputedStyle(tempElem).color; // "rgb(r, g, b)"
    document.body.removeChild(tempElem);
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return { r, g, b };
}

function isColorLight(colorName) {
    const { r, g, b } = getRGB(colorName);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 180;
}

export default function ColorPickerModal() {
    const [selectedColor, setSelectedColor] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    useEffect(() => {
        if (copySuccess) {
            const timer = setTimeout(() => setCopySuccess(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [copySuccess]);

    const copyToClipboard = async (color) => {
        if (!color) return;
        try {
            await navigator.clipboard.writeText(color);
            setCopySuccess(true);
        } catch {
            alert("Failed to copy to clipboard");
        }
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        setIsOpen(false);
        copyToClipboard(color);
    };

    return (
        <>
            <div
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    position: "relative",
                }}
            >
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        padding: "0.5em 1em",
                        borderRadius: "8px",
                        border: "1.5px solid #ccc",
                        fontWeight: "600",
                        cursor: "pointer",
                        backgroundColor: selectedColor || "#f9f9f9",
                        // color: selectedColor ? "#fff" : "#444",
                        color: selectedColor
                            ? (isColorLight(selectedColor) ? "#000" : "#fff")
                            : "#444",
                        // boxShadow: selectedColor ? `0 0 12px ${selectedColor}` : "none",
                        transition: "all 0.3s ease",
                        minWidth: 140,
                        textAlign: "center",
                        userSelect: "none",
                    }}
                >
                    {selectedColor || "Select color"}
                </button>

                {copySuccess && (
                    <span
                        style={{
                            position: "absolute",
                            top: "-1.8rem",
                            right: 0,
                            fontSize: "0.75rem",
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "0.15em 0.5em",
                            borderRadius: "6px",
                            userSelect: "none",
                            opacity: 0.9,
                            whiteSpace: "nowrap",
                        }}
                    >
            Copied!
          </span>
                )}
            </div>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.3)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 10000,
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "16px",
                            padding: "1.5rem 2rem",
                            maxWidth: 620,
                            maxHeight: "70vh",
                            overflowY: "auto",
                            boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            color: "#222",
                            userSelect: "none",
                        }}
                    >
                        <header
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "1rem",
                            }}
                        >
                            <h2
                                style={{
                                    margin: 0,
                                    fontWeight: "700",
                                    fontSize: "1.4rem",
                                    color: "#333",
                                }}
                            >
                                Select a color
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Close"
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    fontSize: "1.8rem",
                                    fontWeight: "700",
                                    color: "#888",
                                    cursor: "pointer",
                                    transition: "color 0.3s",
                                    lineHeight: "1",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#444")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                            >
                                &times;
                            </button>
                        </header>

                        {colorGroups.map((group) => (
                            <section key={group.name} style={{ marginBottom: "1.5rem" }}>
                                <h3
                                    style={{
                                        marginBottom: "0.75rem",
                                        color: "#666",
                                        fontWeight: "600",
                                        fontSize: "1.1rem",
                                    }}
                                >
                                    {group.name}
                                </h3>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(48px, 1fr))",
                                        gap: "10px",
                                    }}
                                >
                                    {group.colors.map((color) => {
                                        const isSelected = selectedColor === color;
                                        return (
                                            <button
                                                key={color}
                                                onClick={() => handleColorSelect(color)}
                                                title={color}
                                                style={{
                                                    backgroundColor: color,
                                                    borderRadius: "50%",
                                                    width: 44,
                                                    height: 44,
                                                    border: isSelected ? "3px solid black" : "2px solid transparent",
                                                    padding: isSelected ? "4px" : "0",
                                                    backgroundClip: "content-box",
                                                    //padding: isSelected ? "4px" : "0",
                                                    boxSizing: "border-box",
                                                    // boxShadow: "none",
                                                    cursor: "pointer",
                                                    transition: "transform 0.2s",
                                                }}
                                                onMouseEnter={(e) =>
                                                    (e.currentTarget.style.transform = "scale(1.15)")
                                                }
                                                onMouseLeave={(e) =>
                                                    (e.currentTarget.style.transform = "scale(1)")
                                                }
                                                aria-pressed={isSelected}
                                            />
                                        );
                                    })}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
