"use strict";(self.webpackChunkdocumentfactorydocs=self.webpackChunkdocumentfactorydocs||[]).push([[61],{744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(4848),s=n(8453),i=n(8774);const o={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:5},c="Artifact",a={id:"references/artifact",title:"Artifact",description:"Artifact is a common name for a schema of objects that manages resources and directories. For example, it can define",source:"@site/docs/references/artifact.mdx",sourceDirName:"references",slug:"/references/artifact",permalink:"/documentfactorydocs/docs/references/artifact",draft:!1,unlisted:!1,editUrl:"https://github.com/GlobalCents-DocumentFactory/documentfactorydocs/tree/main/docs/references/artifact.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"Merge",permalink:"/documentfactorydocs/docs/pipeline/merge"},next:{title:"Naming pattern",permalink:"/documentfactorydocs/docs/references/namingpattern"}},d={},l=[{value:"<code>asset</code>",id:"asset",level:2},{value:"<code>storetype</code>",id:"storetype",level:3},{value:"<code>artifactfs</code>",id:"artifactfs",level:3},{value:"<code>fullname</code>",id:"fullname",level:4},{value:"<code>fsdocumentsavestrategy</code>",id:"fsdocumentsavestrategy",level:4},{value:"<code>keepfolderstructure</code>",id:"keepfolderstructure",level:5},{value:"<code>namingpattern</code>",id:"namingpattern",level:5},{value:"<code>overwrite</code>",id:"overwrite",level:5},{value:"<code>replaceoriginalextension</code>",id:"replaceoriginalextension",level:5},{value:"<code>serverside</code>",id:"serverside",level:5}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"artifact",children:"Artifact"})}),"\n",(0,r.jsx)(t.p,{children:"Artifact is a common name for a schema of objects that manages resources and directories. For example, it can define\r\nand manage various external resources (artifacts) embedded into documents during the document processing pipeline\r\nor specify input and output directories, facilitating the organization and processing of documents.\r\nBelow are the properties available for configuration along with their descriptions."}),"\n",(0,r.jsx)(t.h2,{id:"asset",children:(0,r.jsx)(t.code,{children:"asset"})}),"\n",(0,r.jsxs)(t.p,{children:["The property is used to define external resources. The ",(0,r.jsx)(t.code,{children:"asset"})," property is an object that can have\r\nthe following properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(i.A,{to:"#storetype",children:(0,r.jsx)(t.code,{children:"storetype"})})," - specifies the storage type where the external resource is located."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(i.A,{to:"#artifactfs",children:(0,r.jsx)(t.code,{children:"artifactfs"})})," - configuration details specific to the file system storage type."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(i.A,{to:"#artifactcs",children:(0,r.jsx)(t.code,{children:"artifactcs"})})," - configuration details specific to the Content Server storage type."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(i.A,{to:"#artifactnats",children:(0,r.jsx)(t.code,{children:"artifactnats"})})," - configuration details specific to the Nats storage type."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"storetype",children:(0,r.jsx)(t.code,{children:"storetype"})}),"\n",(0,r.jsxs)(t.p,{children:["Specifies the storage type where the external resource is located. This property enables to correctly\r\naccess and retrieve the asset based on its storage mechanism. Each storage type corresponds to a different method\r\nof accessing and managing the resource, ensuring compatibility with various storage solutions.\r\nCan take the following storage type values: ",(0,r.jsx)(t.code,{children:"none"}),", ",(0,r.jsx)(t.code,{children:"fs"}),", ",(0,r.jsx)(t.code,{children:"nats"}),", ",(0,r.jsx)(t.code,{children:"ftp"}),", ",(0,r.jsx)(t.code,{children:"s3"}),", ",(0,r.jsx)(t.code,{children:"sharepoint"}),", ",(0,r.jsx)(t.code,{children:"contentserver"}),", ",(0,r.jsx)(t.code,{children:"url"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"artifactfs",children:(0,r.jsx)(t.code,{children:"artifactfs"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"artifactfs"})," is used to provide additional configuration details specific to the file system storage type\r\nwhen ",(0,r.jsx)(i.A,{to:"#storetype",children:(0,r.jsx)(t.code,{children:"storetype"})})," is set to ",(0,r.jsx)(t.code,{children:"fs"}),". This property ensures that all necessary information\r\nregarding file locations and access methods are specified, allowing the ",(0,r.jsx)(t.strong,{children:"DocumentFactory"})," to correctly locate and handle\r\nassets stored on a file system.\r\nThe ",(0,r.jsx)(t.code,{children:"artifactfs"})," configuration includes the following settings:"]}),"\n",(0,r.jsx)(t.h4,{id:"fullname",children:(0,r.jsx)(t.code,{children:"fullname"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"fullname"})," property within the ",(0,r.jsx)(t.code,{children:"artifactfs"})," configuration specifies the complete file path to the asset when\r\nthe file system storage type (fs) is used. It provides a direct way to define the exact location of the asset\r\non the file system."]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="pipeline.json"',children:'{\r\n  "merge": true,\r\n  "mergesettings": {\r\n    "saveformat": "pdf",\r\n    "intermediatepage":{\r\n      "asset": {\r\n        "storetype": "fs",\r\n        "artifactfs": {\r\n          "fullname": "C:\\assets\\Separator.pdf"\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"fsdocumentsavestrategy",children:(0,r.jsx)(t.code,{children:"fsdocumentsavestrategy"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"fsdocumentsavestrategy"})," defines the strategy to be used for saving documents to the file system when\r\nthe ",(0,r.jsx)(t.code,{children:"fs"})," (file system) storage type is chosen. This property provides flexibility in determining how the documents\r\nare stored, managed, and accessed on the file system, ensuring that the saving mechanism aligns with the desired\r\norganizational and operational practices.\r\nThe 'fsdocumentsavestrategy' configuration is defined by the following properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(i.A,{to:"#storetype",children:(0,r.jsx)(t.code,{children:"keepfolderstructure"})})," - specifies whether the original folder structure of the source documents should be maintained."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(i.A,{to:"#storetype",children:(0,r.jsx)(t.code,{children:"namingpattern"})})," - defines the pattern to be used for naming saved documents."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(i.A,{to:"#storetype",children:(0,r.jsx)(t.code,{children:"overwrite"})})," - specifies whether existing files should be overwritten when saving a new document with the same name."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(i.A,{to:"#storetype",children:(0,r.jsx)(t.code,{children:"replaceoriginalextension"})})," - specifies whether the original file extension should be replaced with a standard\r\nextension when saving the document."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(i.A,{to:"#storetype",children:(0,r.jsx)(t.code,{children:"serverside"})})," - specifies whether the document saving operations should be performed on the server side."]}),"\n"]}),"\n",(0,r.jsx)(t.h5,{id:"keepfolderstructure",children:(0,r.jsx)(t.code,{children:"keepfolderstructure"})}),"\n",(0,r.jsxs)(t.p,{children:["Property specifies whether the original folder structure of the source documents should be maintained\r\nwhen saving them to the file system. When set to ",(0,r.jsx)(t.code,{children:"true"}),", the original directory structure from the source location is\r\npreserved in the destination directory."]}),"\n",(0,r.jsx)(t.h5,{id:"namingpattern",children:(0,r.jsx)(t.code,{children:"namingpattern"})}),"\n",(0,r.jsxs)(t.p,{children:["Property defines the pattern to be used for naming saved documents. You can find more detailed information about the use\r\nof ",(0,r.jsx)(t.code,{children:"namingpattern"})," with examples in the section ",(0,r.jsx)(t.a,{href:"/documentfactorydocs/docs/references/namingpattern",children:(0,r.jsx)(t.strong,{children:"Naming Pattern"})}),"."]}),"\n",(0,r.jsx)(t.h5,{id:"overwrite",children:(0,r.jsx)(t.code,{children:"overwrite"})}),"\n",(0,r.jsxs)(t.p,{children:["Property specifies whether existing files should be overwritten when saving a new document with the same name\r\nto the file system. When set to ",(0,r.jsx)(t.code,{children:"true"}),", any existing file with the same name at the destination will be overwritten\r\nby the new file. When set to ",(0,r.jsx)(t.code,{children:"false"}),", it prevents overwriting and can be combined with ",(0,r.jsx)(t.code,{children:"namingpattern"})," to generate\r\nunique filenames."]}),"\n",(0,r.jsx)(t.h5,{id:"replaceoriginalextension",children:(0,r.jsx)(t.code,{children:"replaceoriginalextension"})}),"\n",(0,r.jsx)(t.p,{children:"Property specifies whether the original file extension should be replaced with a standard\r\nextension when saving the document. When set to true, the original file extension is replaced with a default or\r\nstandard extension (such as .docx, .pdf, etc.) as defined by the saving strategy or system configuration.\r\nWhen set to false, the original file extension is retained, ensuring that the saved document keeps its initial format."}),"\n",(0,r.jsx)(t.h5,{id:"serverside",children:(0,r.jsx)(t.code,{children:"serverside"})}),"\n",(0,r.jsx)(t.p,{children:"Property specifies whether the document saving operations should be performed on the server side.\r\nThis is relevant for scenarios where the document processing and saving workflows are managed by a server.\r\nWhen set to true, all save operations are carried out on the server, which can be beneficial for performance\r\nand security reasons as it minimizes client-side operations."})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);