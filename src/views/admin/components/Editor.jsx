import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/ko";

import "styles/components/editor.scss";
import axios from "axios";

function Editor({ content, setContents }) {
  //  file upload를 위한 custom plugin
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  }

  // 파일 upload
  const customUploadAdapter = (loader) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          loader.file.then((file) => {
            formData.append("profileURL", file);
            axios({
              method: "POST",
              url: `${process.env.REACT_APP_SERVER_URL}/api/notice/img/save`,
              headers: {
                "Content-Type": "multipart/form-data",
              },
              data: formData,
            })
              .then((res) => {
                const { result } = res.data;
                resolve({
                  default: `${result}`,
                });
              })
              .catch((err) => reject(err));
          });
        });
      },
    };
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={content}
      config={{
        language: "ko",
        extraPlugins: [uploadPlugin],
      }}
      onChange={(event, editor) => {
        setContents(editor.getData());
      }}
    />
  );
}

export default Editor;
