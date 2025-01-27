"use strict";(self.webpackChunkdocumentfactorydocs=self.webpackChunkdocumentfactorydocs||[]).push([[3382],{424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(4848),r=t(8453),s=t(8774);const o={sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:5},d="Merge",c={id:"pipeline/merge",title:"Merge",description:"The Document Factory provides a tool for combining multiple document streams or data sources into a single,",source:"@site/docs/pipeline/merge.mdx",sourceDirName:"pipeline",slug:"/pipeline/merge",permalink:"/documentfactorydocs/docs/pipeline/merge",draft:!1,unlisted:!1,editUrl:"https://github.com/GlobalCents-DocumentFactory/documentfactorydocs/tree/main/docs/pipeline/merge.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"Metadata",permalink:"/documentfactorydocs/docs/pipeline/metadata"},next:{title:"Intro",permalink:"/documentfactorydocs/docs/pipeline/processors/intro"}},a={},l=[{value:"Properties",id:"properties",level:2},{value:"<code>merge</code>",id:"merge-1",level:3},{value:"<code>mergesettings</code>",id:"mergesettings",level:3},{value:"<code>namingpattern</code>",id:"namingpattern",level:4},{value:"<code>saveformat</code>",id:"saveformat",level:4},{value:"<code>settingswordmerge</code>",id:"settingswordmerge",level:4},{value:"<code>sectionstart</code>",id:"sectionstart",level:5},{value:"<code>columnset</code>",id:"columnset",level:5},{value:"<code>linebetweencols</code>",id:"linebetweencols",level:5},{value:"<code>inheritpagesetup</code>",id:"inheritpagesetup",level:5},{value:"<code>endpagesectionstart</code>",id:"endpagesectionstart",level:5},{value:"<code>mergetrackchanges</code>",id:"mergetrackchanges",level:5},{value:"<code>intermediatepage</code>",id:"intermediatepage",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"merge",children:"Merge"})}),"\n",(0,i.jsx)(n.p,{children:"The Document Factory provides a tool for combining multiple document streams or data sources into a single,\ncohesive dataset."}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"merge-1",children:(0,i.jsx)(n.code,{children:"merge"})}),"\n",(0,i.jsxs)(n.p,{children:["The property determines whether the merge process should be part of the pipeline.\nIf the ",(0,i.jsx)(n.code,{children:"merge"})," property is set to ",(0,i.jsx)(n.code,{children:"true"}),", it indicates that the input documents will be merged during the execution\nof the pipeline. Set this property to ",(0,i.jsx)(n.code,{children:"false"})," if you prefer to process each original document individually,\nand create a separate output document for each original document."]}),"\n",(0,i.jsx)(n.h3,{id:"mergesettings",children:(0,i.jsx)(n.code,{children:"mergesettings"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"mergesettings"})," property provides detailed configuration options for the merge process. This is an extension\nthat allows for more granular control over how the merge is carried out."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"mergesettings"})," property is an object that can have the following properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(s.A,{to:"#intermediatepage",children:(0,i.jsx)(n.code,{children:"intermediatepage"})})," - defines whether an intermediate page should be included in the final\nmerged document."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(s.A,{to:"#namingpattern",children:(0,i.jsx)(n.code,{children:"namingpattern"})})," - defines output document name based on static or dynamic data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(s.A,{to:"#settingswordmerge",children:(0,i.jsx)(n.code,{children:"settingswordmerge"})})," - configuration of the merging process for Word documents merging only."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(s.A,{to:"#saveformat",children:(0,i.jsx)(n.code,{children:"saveformat"})})," - determines which type of merge process should be performed."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"namingpattern",children:(0,i.jsx)(n.code,{children:"namingpattern"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"namingpattern"})," property allows to specify the pattern for naming output documents.\nIt controls how the names for the output documents are structured. Both static and dynamic metadata-based data\ncan be used to build a pattern."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="pipeline.json"',children:'{\n  "metadata": "{\\"document_name\\":\\"Output Document\\"}",\n  "merge": true,\n  "mergesettings": {\n    "saveformat": "pdf",\n    "namingpattern": "New {{ document_name }}"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the ",(0,i.jsx)(n.code,{children:"namingpattern"})," property is set to ",(0,i.jsx)(n.code,{children:"New {{ document_name }}"}),', indicating that the output documents\nwill be named using the specified pattern, where "document_name" will be replaced with an appropriate value\nspecified in ',(0,i.jsx)(n.code,{children:"metadata"}),". Adjust the pattern as needed to fit your naming requirements."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If naming pattern is not specified, the output\ndocument name is equal to the name of the first document involved in the merging process."})}),"\n",(0,i.jsx)(n.h4,{id:"saveformat",children:(0,i.jsx)(n.code,{children:"saveformat"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"saveformat"})," property specifies the format in which the output documents will be saved.\nIt also determines the type of merge process to be used, especially when unique settings\n(such as ",(0,i.jsx)(s.A,{to:"#settingswordmerge",children:(0,i.jsx)(n.code,{children:"settingswordmerge"})}),") are involved.\nCan take the following document extension values:\n",(0,i.jsx)(n.code,{children:"doc"}),", ",(0,i.jsx)(n.code,{children:"docx"}),", ",(0,i.jsx)(n.code,{children:"ppt"}),", ",(0,i.jsx)(n.code,{children:"pptx"}),", ",(0,i.jsx)(n.code,{children:"xls"}),", ",(0,i.jsx)(n.code,{children:"xlsx"}),", ",(0,i.jsx)(n.code,{children:"pdf"}),", ",(0,i.jsx)(n.code,{children:"html"}),", ",(0,i.jsx)(n.code,{children:"mhtml"}),", ",(0,i.jsx)(n.code,{children:"gif"}),", ",(0,i.jsx)(n.code,{children:"png"}),", ",(0,i.jsx)(n.code,{children:"jpeg"}),",",(0,i.jsx)(n.code,{children:"tiff"}),", ",(0,i.jsx)(n.code,{children:"text"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"settingswordmerge",children:(0,i.jsx)(n.code,{children:"settingswordmerge"})}),"\n",(0,i.jsx)(n.p,{children:"The section provides further choices for flexible configuration of the merging process for Word documents merging only:"}),"\n",(0,i.jsx)(n.h5,{id:"sectionstart",children:(0,i.jsx)(n.code,{children:"sectionstart"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"sectionstart"})," property allows to define where a new section should begin within the document.\nThe possible values for this property are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Continuous"}),": The new section starts immediately after the previous one, without any page breaks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NewColumn"}),": The new section begins at the top of the next column."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NewPage"}),": The new section starts at the top of the next page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EvenPage"}),": The new section begins on the next even-numbered page. If the current page is even,\nit will start on the next even page; otherwise, it may insert a blank page if necessary."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OddPage"}),": The new section starts on the next odd-numbered page. If the current page is odd,\nit will begin on the following odd page, possibly inserting a blank page if needed."]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"columnset",children:(0,i.jsx)(n.code,{children:"columnset"})}),"\n",(0,i.jsx)(n.p,{children:"The property allows to define the column layout for the document. The possible values for this property include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"none"}),": The section will have a single-column layout."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"twocols"}),": Allows for the appending of columns from one page to the columns on the next page."]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"linebetweencols",children:(0,i.jsx)(n.code,{children:"linebetweencols"})}),"\n",(0,i.jsxs)(n.p,{children:["The property in the pipeline allows to specify whether a vertical line should be drawn between columns in a\nmulti-column layout. If the ",(0,i.jsx)(n.code,{children:"linebetweencols"})," property is set to ",(0,i.jsx)(n.code,{children:"true"}),", it indicates that a vertical line\nwill be drawn between the columns. Set this property to ",(0,i.jsx)(n.code,{children:"false"})," if you prefer not to have a line between the columns."]}),"\n",(0,i.jsx)(n.h5,{id:"inheritpagesetup",children:(0,i.jsx)(n.code,{children:"inheritpagesetup"})}),"\n",(0,i.jsxs)(n.p,{children:["The property in the pipeline determines whether the new section should inherit\nthe page setup (including margins, paper size, orientation, etc.) from the previous section.\nIf the ",(0,i.jsx)(n.code,{children:"inheritpagesetup"})," property is set to ",(0,i.jsx)(n.code,{children:"true"}),", it indicates that the new section will inherit the page\nsetup from the previous section. Set this property to ",(0,i.jsx)(n.code,{children:"false"})," if you want the new section to have a distinct page setup."]}),"\n",(0,i.jsx)(n.h5,{id:"endpagesectionstart",children:(0,i.jsx)(n.code,{children:"endpagesectionstart"})}),"\n",(0,i.jsx)(n.p,{children:"This property determines where the last page of the output document starts.\nThe possible values for this property are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Continuous"}),": The last page appends to the previous page of the document."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NewColumn"}),": The last page starts at the top of the next column."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NewPage"}),": The last page starts at the top of the next page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EvenPage"}),": The last page starts on the next even-numbered page.\nIf the current page is even, it will start on the next even page; otherwise, it may insert a blank page if necessary."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OddPage"}),": The last page starts on the next odd-numbered page.\nIf the current page is odd, it will begin on the following odd page, possibly inserting a blank page if needed."]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"mergetrackchanges",children:(0,i.jsx)(n.code,{children:"mergetrackchanges"})}),"\n",(0,i.jsxs)(n.p,{children:["The property determines whether the track changes (such as insertions, deletions, and format changes if enabled\nin the Word document) should be merged and retained in the output document.\nIf the ",(0,i.jsx)(n.code,{children:"mergetrackchanges"})," property is set to ",(0,i.jsx)(n.code,{children:"true"}),",it indicates that the track changes will be merged and retained\nin the output document. Set this property to ",(0,i.jsx)(n.code,{children:"false"})," if you prefer not to include track changes in the merged document."]}),"\n",(0,i.jsxs)(n.p,{children:["The property in the pipeline specifies whether track changes should be merged and retained at the character level.\nThis allows for finer granularity in tracking and merging text changes.\nIf the ",(0,i.jsx)(n.code,{children:"mergetrackchangescharacterlevel"})," property is set to ",(0,i.jsx)(n.code,{children:"true"}),", it indicates that track changes will be merged and\nretained at the character level in the output document. Set this property to ",(0,i.jsx)(n.code,{children:"false"})," if you prefer to handle\ntrack changes at a less granular level."]}),"\n",(0,i.jsx)(n.h4,{id:"intermediatepage",children:(0,i.jsx)(n.code,{children:"intermediatepage"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"intermediatepage"})," property is used to define whether an intermediate page should be included in the final\nmerged document. An intermediate page generally serves as a placeholder or separator when multiple documents\nare being combined. It can be used for various purposes such as indicating transitions, providing page breaks,\nor adding informational content between the merged documents.\nCheck out the available setup configurations in the section ",(0,i.jsx)(n.a,{href:"/documentfactorydocs/docs/references/artifact",children:(0,i.jsx)(n.strong,{children:"Artifact"})}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);