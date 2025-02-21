"use strict";(self.webpackChunkdocumentfactorydocs=self.webpackChunkdocumentfactorydocs||[]).push([[61],{744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=t(4848),s=t(8453),r=t(8774);const o={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:5},c="Artifact",d={id:"references/artifact",title:"Artifact",description:"Artifact is a common name for a schema of objects that manages resources and directories. For example, it can define",source:"@site/docs/references/artifact.mdx",sourceDirName:"references",slug:"/references/artifact",permalink:"/documentfactorydocs/docs/references/artifact",draft:!1,unlisted:!1,editUrl:"https://github.com/GlobalCents-DocumentFactory/documentfactorydocs/tree/main/docs/references/artifact.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"tutorialSidebar",previous:{title:"PDF Settings",permalink:"/documentfactorydocs/docs/pipeline/processors/pdfsettings"},next:{title:"Naming Pattern",permalink:"/documentfactorydocs/docs/references/namingpattern"}},a={},l=[{value:"<code>asset</code>",id:"asset",level:2},{value:"<code>storetype</code>",id:"storetype",level:3},{value:"<code>mimetype</code>",id:"mimetype",level:3},{value:"<code>shouldbeprocessed</code>",id:"shouldbeprocessed",level:3},{value:"<code>artifactfs</code>",id:"artifactfs",level:3},{value:"<code>fullname</code>",id:"fullname",level:4},{value:"<code>fsdocumentsavestrategy</code>",id:"fsdocumentsavestrategy",level:4},{value:"<code>keepfolderstructure</code>",id:"keepfolderstructure",level:5},{value:"<code>namingpattern</code>",id:"namingpattern",level:5},{value:"<code>overwrite</code>",id:"overwrite",level:5},{value:"<code>replaceoriginalextension</code>",id:"replaceoriginalextension",level:5},{value:"<code>serverside</code>",id:"serverside",level:5},{value:"<code>ordering</code>",id:"ordering",level:2},{value:"<code>level</code>",id:"level",level:2},{value:"<code>split</code>",id:"split",level:2},{value:"<code>metadata</code>",id:"metadata",level:2},{value:"<code>children</code>",id:"children",level:2},{value:"<code>statusinfo</code>",id:"statusinfo",level:2},{value:"<code>clientinfo</code>",id:"clientinfo",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"artifact",children:"Artifact"})}),"\n",(0,i.jsx)(n.p,{children:"Artifact is a common name for a schema of objects that manages resources and directories. For example, it can define\nand manage various external resources (artifacts) embedded into documents during the document processing pipeline\nor specify input and output directories, facilitating the organization and processing of documents.\nBelow are the properties available for configuration along with their descriptions."}),"\n",(0,i.jsx)(n.h2,{id:"asset",children:(0,i.jsx)(n.code,{children:"asset"})}),"\n",(0,i.jsxs)(n.p,{children:["The property is used to define external resources. The ",(0,i.jsx)(n.code,{children:"asset"})," property is an object that can have\nthe following properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#storetype",children:(0,i.jsx)(n.code,{children:"storetype"})})," - specifies the storage type where the external resource is located."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#mimetype",children:(0,i.jsx)(n.code,{children:"mimetype"})})," - specifies the mimetype of the external resource."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#name",children:(0,i.jsx)(n.code,{children:"name"})})," - ???."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#shouldbeprocessed",children:(0,i.jsx)(n.code,{children:"shouldbeprocessed"})})," - specifies whether the resource should be processed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#artifactfs",children:(0,i.jsx)(n.code,{children:"artifactfs"})})," - configuration details specific to the file system storage type."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#artifactcs",children:(0,i.jsx)(n.code,{children:"artifactcs"})})," - configuration details specific to the Content Server storage type."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#artifactnats",children:(0,i.jsx)(n.code,{children:"artifactnats"})})," - configuration details specific to the Nats storage type."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"storetype",children:(0,i.jsx)(n.code,{children:"storetype"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the storage type where the external resource is located. This property enables to correctly\naccess and retrieve the asset based on its storage mechanism. Each storage type corresponds to a different method\nof accessing and managing the resource, ensuring compatibility with various storage solutions.\nCan take the following storage type values: ",(0,i.jsx)(n.code,{children:"none"}),", ",(0,i.jsx)(n.code,{children:"fs"}),", ",(0,i.jsx)(n.code,{children:"nats"}),", ",(0,i.jsx)(n.code,{children:"ftp"}),", ",(0,i.jsx)(n.code,{children:"s3"}),", ",(0,i.jsx)(n.code,{children:"sharepoint"}),", ",(0,i.jsx)(n.code,{children:"contentserver"}),", ",(0,i.jsx)(n.code,{children:"url"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"mimetype",children:(0,i.jsx)(n.code,{children:"mimetype"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"mimetype"})," property within the asset object is a string that defines the media type of the external resource.\nCorrectly specifying this property ensures that the Document Factory platform can process and manage the asset properly,\nregardless of the stage it is used in the document handling workflow."]}),"\n",(0,i.jsx)(n.p,{children:"Common MIME Types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"application/pdf"}),": PDF document"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"image/png"}),": PNG image"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"image/jpeg"}),": JPEG image"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"text/plain"}),": Plain text file"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"application/msword"}),": Microsoft Word document"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),": Microsoft Word (OpenXML format)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="pipeline.json"',children:'{\n  "merge": true,\n  "mergesettings": {\n    "saveformat": "pdf",\n    "mimetype": "application/pdf",\n    "intermediatepage":{\n      "asset": {\n        "storetype": "fs",\n        "artifactfs": {\n          "fullname": "C:\\assets\\Separator.pdf"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"shouldbeprocessed",children:(0,i.jsx)(n.code,{children:"shouldbeprocessed"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"shouldbeprocessed"})," property within the asset object is a boolean that specifies whether the resource should\nbe processed during the document handling workflow. Setting this property to ",(0,i.jsx)(n.code,{children:"true"})," indicates that the resource\nshould be included in the processing operations, while setting it to ",(0,i.jsx)(n.code,{children:"false"})," excludes the resource from being processed."]}),"\n",(0,i.jsx)(n.h3,{id:"artifactfs",children:(0,i.jsx)(n.code,{children:"artifactfs"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"artifactfs"})," is used to provide additional configuration details specific to the file system storage type\nwhen ",(0,i.jsx)(r.A,{to:"#storetype",children:(0,i.jsx)(n.code,{children:"storetype"})})," is set to ",(0,i.jsx)(n.code,{children:"fs"}),". This property ensures that all necessary information\nregarding file locations and access methods are specified, allowing the ",(0,i.jsx)(n.strong,{children:"DocumentFactory"})," to correctly locate and handle\nassets stored on a file system.\nThe ",(0,i.jsx)(n.code,{children:"artifactfs"})," configuration includes the following settings:"]}),"\n",(0,i.jsx)(n.h4,{id:"fullname",children:(0,i.jsx)(n.code,{children:"fullname"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"fullname"})," property within the ",(0,i.jsx)(n.code,{children:"artifactfs"})," configuration specifies the complete file path to the asset when\nthe file system storage type (fs) is used. It provides a direct way to define the exact location of the asset\non the file system."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="pipeline.json"',children:'{\n  "merge": true,\n  "mergesettings": {\n    "saveformat": "pdf",\n    "intermediatepage":{\n      "asset": {\n        "storetype": "fs",\n        "artifactfs": {\n          "fullname": "C:\\assets\\Separator.pdf"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"fsdocumentsavestrategy",children:(0,i.jsx)(n.code,{children:"fsdocumentsavestrategy"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"fsdocumentsavestrategy"})," defines the strategy to be used for saving documents to the file system when\nthe ",(0,i.jsx)(n.code,{children:"fs"})," (file system) storage type is chosen. This property provides flexibility in determining how the documents\nare stored, managed, and accessed on the file system, ensuring that the saving mechanism aligns with the desired\norganizational and operational practices.\nThe 'fsdocumentsavestrategy' configuration is defined by the following properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#storetype",children:(0,i.jsx)(n.code,{children:"keepfolderstructure"})})," - specifies whether the original folder structure of the source documents should be maintained."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#storetype",children:(0,i.jsx)(n.code,{children:"namingpattern"})})," - defines the pattern to be used for naming saved documents."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#storetype",children:(0,i.jsx)(n.code,{children:"overwrite"})})," - specifies whether existing files should be overwritten when saving a new document with the same name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#storetype",children:(0,i.jsx)(n.code,{children:"replaceoriginalextension"})})," - specifies whether the original file extension should be replaced with a standard\nextension when saving the document."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(r.A,{to:"#storetype",children:(0,i.jsx)(n.code,{children:"serverside"})})," - specifies whether the document saving operations should be performed on the server side."]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"keepfolderstructure",children:(0,i.jsx)(n.code,{children:"keepfolderstructure"})}),"\n",(0,i.jsxs)(n.p,{children:["Property specifies whether the original folder structure of the source documents should be maintained\nwhen saving them to the file system. When set to ",(0,i.jsx)(n.code,{children:"true"}),", the original directory structure from the source location is\npreserved in the destination directory."]}),"\n",(0,i.jsx)(n.h5,{id:"namingpattern",children:(0,i.jsx)(n.code,{children:"namingpattern"})}),"\n",(0,i.jsxs)(n.p,{children:["Property defines the pattern to be used for naming saved documents. You can find more detailed information about the use\nof ",(0,i.jsx)(n.code,{children:"namingpattern"})," with examples in the section ",(0,i.jsx)(n.a,{href:"/documentfactorydocs/docs/references/namingpattern",children:(0,i.jsx)(n.strong,{children:"Naming Pattern"})}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"overwrite",children:(0,i.jsx)(n.code,{children:"overwrite"})}),"\n",(0,i.jsxs)(n.p,{children:["Property specifies whether existing files should be overwritten when saving a new document with the same name\nto the file system. When set to ",(0,i.jsx)(n.code,{children:"true"}),", any existing file with the same name at the destination will be overwritten\nby the new file. When set to ",(0,i.jsx)(n.code,{children:"false"}),", it prevents overwriting and can be combined with ",(0,i.jsx)(n.code,{children:"namingpattern"})," to generate\nunique filenames."]}),"\n",(0,i.jsx)(n.h5,{id:"replaceoriginalextension",children:(0,i.jsx)(n.code,{children:"replaceoriginalextension"})}),"\n",(0,i.jsx)(n.p,{children:"Property specifies whether the original file extension should be replaced with a standard\nextension when saving the document. When set to true, the original file extension is replaced with a default or\nstandard extension (such as .docx, .pdf, etc.) as defined by the saving strategy or system configuration.\nWhen set to false, the original file extension is retained, ensuring that the saved document keeps its initial format."}),"\n",(0,i.jsx)(n.h5,{id:"serverside",children:(0,i.jsx)(n.code,{children:"serverside"})}),"\n",(0,i.jsx)(n.p,{children:"Property specifies whether the document saving operations should be performed on the server side.\nThis is relevant for scenarios where the document processing and saving workflows are managed by a server.\nWhen set to true, all save operations are carried out on the server, which can be beneficial for performance\nand security reasons as it minimizes client-side operations."}),"\n",(0,i.jsx)(n.h2,{id:"ordering",children:(0,i.jsx)(n.code,{children:"ordering"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ordering"})," property specifies the order in which the artifact should be processed relative to other artifacts.\nThis integer value is used to sequence the processing of multiple artifacts, ensuring they are handled\nin the defined order during document processing operations."]}),"\n",(0,i.jsx)(n.p,{children:"Value Guidelines:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use sequential integers starting from 1 to define the processing order."}),"\n",(0,i.jsx)(n.li,{children:"Ensure that no two artifacts have the same ordering value to avoid conflicts or undefined behavior."}),"\n",(0,i.jsx)(n.li,{children:"Higher ordering values represent later positions in the sequence."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"level",children:(0,i.jsx)(n.code,{children:"level"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"level"})," property is an integer that defines the hierarchical level or priority of the artifact.\nThis property allows users to organize and manage artifacts based on their relative importance or their place\nin a hierarchical structure within the document processing workflow. It adds an additional dimension of organization\nbeyond the ",(0,i.jsx)(n.code,{children:"ordering"})," property, which sequences artifacts."]}),"\n",(0,i.jsx)(n.p,{children:"Value Guidelines:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lower Values (e.g., 1)"}),": Indicate higher importance or higher-level priority."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Higher Values"}),": Indicate lower importance or lower-level priority."]}),"\n",(0,i.jsx)(n.li,{children:"Ensure that the level values are assigned logically to reflect the actual hierarchical structure or priority of the artifacts."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"split",children:(0,i.jsx)(n.code,{children:"split"})}),"\n",(0,i.jsx)(n.p,{children:"???"}),"\n",(0,i.jsx)(n.h2,{id:"metadata",children:(0,i.jsx)(n.code,{children:"metadata"})}),"\n",(0,i.jsx)(n.p,{children:"???"}),"\n",(0,i.jsx)(n.h2,{id:"children",children:(0,i.jsx)(n.code,{children:"children"})}),"\n",(0,i.jsxs)(n.p,{children:["The children property within the ",(0,i.jsx)(n.strong,{children:"Artifact"})," type defines a hierarchical structure by containing an array of child artifacts.\nThis allows for the nesting of multiple ",(0,i.jsx)(n.strong,{children:"Artifact"})," within a parent ",(0,i.jsx)(n.strong,{children:"Artifact"}),", enabling complex document structures\nand processing workflows that mirror hierarchical or nested relationships.\nThis setup is useful for organizing documents with nested sections, chapters, or components that need to be processed\nin a hierarchical or nested order."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Each item in the children array should be a valid Artifact object."}),"\n",(0,i.jsx)(n.li,{children:"The children array can be empty ([]) if there are no child artifacts."}),"\n",(0,i.jsx)(n.li,{children:"The hierarchical relationship should be meaningful and reflect the actual structure required for processing."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"statusinfo",children:(0,i.jsx)(n.code,{children:"statusinfo"})}),"\n",(0,i.jsx)(n.p,{children:"???"}),"\n",(0,i.jsx)(n.h2,{id:"clientinfo",children:(0,i.jsx)(n.code,{children:"clientinfo"})}),"\n",(0,i.jsx)(n.p,{children:"???"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);