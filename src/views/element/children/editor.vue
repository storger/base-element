<template>
    <div>
        <Top-title icon="icon-element" title="富文本" stitle="基于 quill 的富文本vue-quill-editor" crumbs="false"></Top-title>
        <el-card>
            <h2 slot="header" style="text-align:left;color:#E6A23C">vue-quill-editor</h2>
            <div class="code">
                <code v-html="content"></code>
            </div>
            <quill-editor ref="myTextEditor" v-model="content" :options="editorOption">
            </quill-editor>
        </el-card>
    </div>
</template>

<script>
import TopTitle from "../../../components/toptitle";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  name: "editor",
  data() {
    return {
      content: `<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading..</span></h2>`,
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"]
          ]
        }
      }
    };
  },
  components: {
    TopTitle,
    quillEditor
  }
};
</script>

<style lang="less">
.code {
  margin-bottom: 50px;
}
.ql-container {
  height: 200px;
}
</style>

