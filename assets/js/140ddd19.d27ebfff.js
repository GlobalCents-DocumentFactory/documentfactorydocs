"use strict";(self.webpackChunkdocumentfactorydocs=self.webpackChunkdocumentfactorydocs||[]).push([[6382],{5418:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=o(4848),s=o(8453);const t={sidebar_position:1},r="Intro",c={id:"pipeline/processors/intro",title:"Intro",description:"Document Factory provides a comprehensive suite of tools for handling a variety of document processing tasks,",source:"@site/docs/pipeline/processors/intro.mdx",sourceDirName:"pipeline/processors",slug:"/pipeline/processors/intro",permalink:"/documentfactorydocs/docs/pipeline/processors/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/GlobalCents-DocumentFactory/documentfactorydocs/tree/main/docs/pipeline/processors/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Merge",permalink:"/documentfactorydocs/docs/pipeline/merge"},next:{title:"Convert",permalink:"/documentfactorydocs/docs/pipeline/processors/convert"}},a={},d=[{value:"Pipeline Configuration",id:"pipeline-configuration",level:2},{value:"Customizing the Workflow",id:"customizing-the-workflow",level:2},{value:"General Recommendations",id:"general-recommendations",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"intro",children:"Intro"})}),"\n",(0,i.jsx)(n.p,{children:"Document Factory provides a comprehensive suite of tools for handling a variety of document processing tasks,\nincluding document conversion, watermarking, digital signing, OCR (Optical Character Recognition), compression, and more."}),"\n",(0,i.jsx)(n.h2,{id:"pipeline-configuration",children:"Pipeline Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The configuration of Document Factory involves using two main properties within the pipeline: ",(0,i.jsx)(n.code,{children:"processors"})," and\n",(0,i.jsx)(n.code,{children:"postprocess"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Both ",(0,i.jsx)(n.code,{children:"processors"})," and ",(0,i.jsx)(n.code,{children:"postprocess"})," are arrays that define the sequence and specifics of the actions to be included\nin the workflow."]}),"\n",(0,i.jsx)(n.h2,{id:"customizing-the-workflow",children:"Customizing the Workflow"}),"\n",(0,i.jsx)(n.p,{children:"Users have the flexibility to decide where to include specific actions, either within processors or postprocess,\nbased on their requirements and any provided recommendations in the process descriptions.\nThis allows for fine-tuning the document processing pipeline to meet specific needs."}),"\n",(0,i.jsx)(n.h2,{id:"general-recommendations",children:"General Recommendations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Processors"}),": Actions such as conversion, OCR, and document splitting should generally be carried out\nin the processors array. These tasks are fundamental to the initial processing and transformation of documents."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Postprocess"}),": Actions such as compression, overlaying watermarks, or applying digital signatures\nare typically performed in the postprocess array. These tasks are often related to finalizing the document\nafter the primary processing actions are complete."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By configuring the processors and postprocess properties appropriately, users can create a tailored and efficient\ndocument processing workflow within the Document Factory."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var i=o(6540);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);