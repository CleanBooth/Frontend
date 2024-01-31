import { useState } from "react";

function ImageUpload() {
  const [fileContent, setFileContent] = useState("");

  const handleChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target.result;

        // 이미지 내용을 상태에 설정합니다.
        setFileContent(content);
      };

      // reader.readAsDataURL을 사용해 이미지 파일을 dataURL로 읽습니다.
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      {fileContent && <img src={fileContent} alt="업로드된 이미지" />}
    </div>
  );
}

export default ImageUpload;
