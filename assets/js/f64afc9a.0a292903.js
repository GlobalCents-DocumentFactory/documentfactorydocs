"use strict";(self.webpackChunkdocumentfactorydocs=self.webpackChunkdocumentfactorydocs||[]).push([[9121],{1302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var i=r(4848),n=r(8453);const o={sidebar_position:5},a="Watermark",s={id:"pipeline/processors/watermark",title:"Watermark",description:"The Watermark feature in Document Factory allows for adding various types of watermarks to documents, such as text,",source:"@site/docs/pipeline/processors/watermark.mdx",sourceDirName:"pipeline/processors",slug:"/pipeline/processors/watermark",permalink:"/documentfactorydocs/docs/pipeline/processors/watermark",draft:!1,unlisted:!1,editUrl:"https://github.com/GlobalCents-DocumentFactory/documentfactorydocs/tree/main/docs/pipeline/processors/watermark.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"OCR",permalink:"/documentfactorydocs/docs/pipeline/processors/ocr"},next:{title:"Artifact",permalink:"/documentfactorydocs/docs/references/artifact"}},l={},h=[{value:"<code>actionwatermark</code>",id:"actionwatermark",level:2},{value:"<code>settingswatermarks</code>",id:"settingswatermarks",level:2},{value:"<code>watermarktype</code>",id:"watermarktype",level:3},{value:"<code>layername</code>",id:"layername",level:3},{value:"<code>color</code>",id:"color",level:3},{value:"<code>fontfamily</code>",id:"fontfamily",level:3},{value:"<code>fontsize</code>",id:"fontsize",level:3},{value:"<code>rotation</code>",id:"rotation",level:3},{value:"<code>height</code>",id:"height",level:3},{value:"<code>width</code>",id:"width",level:3},{value:"<code>text</code>",id:"text",level:3},{value:"<code>underlayout</code>",id:"underlayout",level:3},{value:"<code>fontbold</code>",id:"fontbold",level:3},{value:"<code>fontitalic</code>",id:"fontitalic",level:3},{value:"<code>verticalalign</code>",id:"verticalalign",level:3},{value:"<code>texthorizontalalign</code>",id:"texthorizontalalign",level:3},{value:"<code>textverticalposition</code>",id:"textverticalposition",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"watermark",children:"Watermark"})}),"\n",(0,i.jsx)(t.p,{children:"The Watermark feature in Document Factory allows for adding various types of watermarks to documents, such as text,\nQR codes, images, or static images."}),"\n",(0,i.jsx)(t.h2,{id:"actionwatermark",children:(0,i.jsx)(t.code,{children:"actionwatermark"})}),"\n",(0,i.jsxs)(t.p,{children:["This feature can be activated within the document processing pipeline by setting the ",(0,i.jsx)(t.code,{children:"actionwatermark"})," property to ",(0,i.jsx)(t.code,{children:"true"}),"\nwithin ",(0,i.jsx)(t.code,{children:"processors"})," or ",(0,i.jsx)(t.code,{children:"postprocess"})," arrays."]}),"\n",(0,i.jsx)(t.h2,{id:"settingswatermarks",children:(0,i.jsx)(t.code,{children:"settingswatermarks"})}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, the ",(0,i.jsx)(t.code,{children:"settingswatermarks"})," property provides configuration parameters for the Watermark action.\nThe ",(0,i.jsx)(t.code,{children:"settingswatermarks"})," property is an array of objects, each defining a specific watermark to be applied.\nEach object within the array can contain the following properties:"]}),"\n",(0,i.jsx)(t.h3,{id:"watermarktype",children:(0,i.jsx)(t.code,{children:"watermarktype"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"watermarktype"})," property specifies the type of watermark to be applied and is of type string. This property allows\nto choose from a variety of watermark types, each serving different purposes and providing different visual effects.\nThe available options for this property include:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Text"}),": Applies a text-based watermark."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Qrcode"}),": Applies a QR code as the watermark."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Image"}),": Applies a general image as the watermark."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Staticimage"}),": Applies a static (unchanging) image as the watermark."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"layername",children:(0,i.jsx)(t.code,{children:"layername"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"layername"})," property defines the name of the layer where the watermark will be applied. This property allows\nto specify a distinct layer within the document's structure, ensuring that the watermark is placed in the correct location.\nThe value for this property should be a string representing the name of the layer."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:'When a "Watermark" is applied to a document, the build process associates the specified "Layer Name" with the applied "Watermark."\nIn order to delete previous watermarks from a PDF at a later time, this field must be filled out accurately.\nThis ensures that the watermarks can be properly identified and removed if necessary.'})}),"\n",(0,i.jsx)(t.h3,{id:"color",children:(0,i.jsx)(t.code,{children:"color"})}),"\n",(0,i.jsx)(t.p,{children:"The color property determines the color of the watermark. This property allows you to specify the desired color,\nensuring that the watermark text or image integrates seamlessly with the overall design and aesthetics of the document.\nThe value for this property should be a string representing the color, which can be in various formats such as a color name,\na hexadecimal code, or an RGB value."}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsx)(t.p,{children:"Add an info about the color formats."})}),"\n",(0,i.jsx)(t.h3,{id:"fontfamily",children:(0,i.jsx)(t.code,{children:"fontfamily"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"fontfamily"})," property determines the font family for the watermark text. This property allows you to select\nthe desired typeface, ensuring that the watermark text matches your preferred style and aesthetic. The value for\nthis property should be a string representing the chosen font family."]}),"\n",(0,i.jsx)(t.p,{children:"The available options for this property include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"COURIER"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"HELVETICA"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"TIMES_ROMAN"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"SYMBOL"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"ZAPFDINGBATS"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"UNDEFINED"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"fontsize",children:(0,i.jsx)(t.code,{children:"fontsize"})}),"\n",(0,i.jsx)(t.p,{children:"The fontsize property specifies the size of the font for the watermark text. This property allows you to set a specific\nfont size, giving you control over how large or small the watermark text appears on the page.\nThe value for this property should be a number."}),"\n",(0,i.jsx)(t.p,{children:"If the value is set to 0, the property will select an automatic mode where the font size is determined based on the\nwatermark's height and width parameters. This ensures that the text size is appropriately scaled to fit within\nthe designated dimensions of the watermark."}),"\n",(0,i.jsx)(t.h3,{id:"rotation",children:(0,i.jsx)(t.code,{children:"rotation"})}),"\n",(0,i.jsx)(t.p,{children:"The rotation property specifies the degree of rotation for the watermark on the page. This property allows you to set\nhow much the watermark should be slanted or rotated, giving you control over its orientation. The value for this property\nshould be a number, measured in degrees."}),"\n",(0,i.jsx)(t.p,{children:"A value of 0 indicates no rotation, meaning the watermark will remain horizontally aligned. A negative value will slant\nthe watermark from lower on the right to higher on the left, creating a leftward tilt. Adjusting this property can help\nachieve the desired visual effect and alignment for the watermark within the document."}),"\n",(0,i.jsx)(t.h3,{id:"height",children:(0,i.jsx)(t.code,{children:"height"})}),"\n",(0,i.jsx)(t.p,{children:"The height property determines the height of the watermark within the border of the document. This property allows\nto specify how tall the watermark should be, offering control over its vertical dimensions and overall presence on the page.\nThe value for this property should be a number, representing the measurement of the watermark's height."}),"\n",(0,i.jsx)(t.h3,{id:"width",children:(0,i.jsx)(t.code,{children:"width"})}),"\n",(0,i.jsx)(t.p,{children:"The width property determines the width of the watermark within the border of the document. This property allows\nto specify how wide the watermark should be, offering control over its horizontal dimensions and overall appearance on the page.\nThe value for this property should be a number, representing the measurement of the watermark's width."}),"\n",(0,i.jsx)(t.h3,{id:"text",children:(0,i.jsx)(t.code,{children:"text"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"text"})," property defines the text to be displayed in the watermark. This property allows you to specify custom text\nthat will appear as the watermark on the document. Additionally, it supports the use of dynamic data based on\nthe metadata pipeline property, which allows for the inclusion of variable or context-specific information within\nthe watermark text."]}),"\n",(0,i.jsxs)(t.p,{children:["For more detailed information about using dynamic data, refer to the ",(0,i.jsx)(t.a,{href:"/documentfactorydocs/docs/pipeline/metadata",children:(0,i.jsx)(t.strong,{children:"Metadata"})})," section."]}),"\n",(0,i.jsx)(t.p,{children:"By setting the text property, you can customize the content of the watermark to suit your specific needs,\nwhether you are using static text or dynamic metadata."}),"\n",(0,i.jsx)(t.h3,{id:"underlayout",children:(0,i.jsx)(t.code,{children:"underlayout"})}),"\n",(0,i.jsxs)(t.p,{children:["Specifies whether the watermark should be placed under the document layout.  If the ",(0,i.jsx)(t.code,{children:"underlayout"})," property is set to ",(0,i.jsx)(t.code,{children:"true"}),",\nit indicates that the watermark will be placed under the document content. Set this property to ",(0,i.jsx)(t.code,{children:"false"})," if you want to\nplace the watermark over the content."]}),"\n",(0,i.jsx)(t.h3,{id:"fontbold",children:(0,i.jsx)(t.code,{children:"fontbold"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"fontbold"})," property specifies whether the watermark text should be bold.\nBold text is typically used to add emphasis and make the text stand out more prominently within the document.\nSet this property to ",(0,i.jsx)(t.code,{children:"true"})," to make the watermark text bold. When set, the characters in the watermark text will become\nthicker and more visually striking, enhancing their visibility and impact. If you do not want the watermark text to be bold\nand prefer it to maintain a regular weight, set this property to ",(0,i.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"fontitalic",children:(0,i.jsx)(t.code,{children:"fontitalic"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"fontitalic"})," property specifies whether the watermark text should be italicized. By using this property, you can\ncontrol the text style of your watermark, adding emphasis or stylistic variation to the text."]}),"\n",(0,i.jsxs)(t.p,{children:["Set this property to ",(0,i.jsx)(t.code,{children:"true"})," to make the watermark text italic. This will slant the characters,giving them an oblique\nappearance typically used to highlight or distinguish the watermark text from regular text in the document.\nIf you prefer the watermark text to remain in its standard form, set this property to ",(0,i.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"verticalalign",children:(0,i.jsx)(t.code,{children:"verticalalign"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"verticalalign"})," property specifies the vertical alignment of the watermark within the document. It determines where\nthe watermark will be placed along the vertical axis of the page. The available options for this property include:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"top"}),": Positions the watermark at the top of the document."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"center"}),": Places the watermark in the center of the document, evenly balanced between the top and bottom."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bottom"}),": Aligns the watermark at the bottom of the document."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"texthorizontalalign",children:(0,i.jsx)(t.code,{children:"texthorizontalalign"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"texthorizontalalign"})," property specifies the horizontal alignment of the watermark text within the document.\nThis property allows you to control where the watermark text is positioned along the horizontal axis of the page,\nensuring it is placed according to your design preferences."]}),"\n",(0,i.jsx)(t.p,{children:"The available string options for this property include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"left"}),": Aligns the watermark text to the left side of the document."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"center"}),": Centers the watermark text in the middle of the document."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"right"}),": Aligns the watermark text to the right side of the document."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Selecting the appropriate texthorizontalalign option ensures that the watermark text is positioned exactly\nwhere you want it, enhancing the overall appearance and readability of the document."}),"\n",(0,i.jsx)(t.h3,{id:"textverticalposition",children:(0,i.jsx)(t.code,{children:"textverticalposition"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"textverticalposition"})," property specifies the vertical position of the watermark text within the document.\nThis property allows you to control where the watermark text is positioned along the vertical axis of\nthe page, ensuring it is placed according to your design preferences."]}),"\n",(0,i.jsx)(t.p,{children:"The available string options for this property include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"top"}),": Places the watermark text at the top of the document."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"center"}),": Centers the watermark text in the middle of the document."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bottom"}),": Places the watermark text at the bottom of the document."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Selecting the appropriate ",(0,i.jsx)(t.code,{children:"textverticalposition"})," option ensures that the watermark text is positioned exactly where\nyou want it, enhancing the overall appearance and readability of the document."]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var i=r(6540);const n={},o=i.createContext(n);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);