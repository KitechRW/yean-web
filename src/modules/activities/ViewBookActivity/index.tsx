import DocViewer, {DocViewerRenderers} from "react-doc-viewer";
import React from "react";

const ViewBookActivity = ({book}:any) => {
  return <div className={"bg-red-500"}>
    <DocViewer pluginRenderers={DocViewerRenderers} className={"text-black"}
               documents={[{uri:"http://localhost:3001/uploads/media-1662012569494-969497701.pdf"}]}
               theme={{
                 primary: "#5296d8",
                 secondary: "#ffffff",
                 tertiary: "#5296d899",
                 text_primary: "#ffffff",
                 text_secondary: "#5296d8",
                 text_tertiary: "#00000099",
                 disableThemeScrollbar: false,
               }}
    />
  </div>
}

export default ViewBookActivity
