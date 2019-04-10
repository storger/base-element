<template>
  <div>
    <Top-title icon="icon-fangda" title="文件上传" stitle="文件上传插件" crumbs="false"></Top-title>
    <el-card>
      <h2 slot="header" style="text-align:left;color:#E6A23C">Upload</h2>
      <el-row :gutter="20">
        <el-col :span="6" style="border-right:1px solid #ccc">
          <el-upload
            class="upload-demo"
            :action="$getUploadUrl()"
            list-type="picture"
            :file-list="defaultList"
            :on-success="success"
            :on-remove="remove"
            multiple
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-col>
        <el-col :span="18">
          <el-upload
            class="upload-demo"
            :action="$getUploadUrl()"
            list-type="picture-card"
            :file-list="defaultList"
            :on-success="success"
            :on-remove="remove"
            multiple
          >
            <i class="el-icon-upload"></i>
          </el-upload>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>


<script>
import TopTitle from "../../components/toptitle";
import Axios from "axios";
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      defaultList: [
        {
          name: "food.jpeg",
          url:
            "http://47.106.134.215:9000/file/downloadById?fileId=2015482243995257211&filetype=t"
        },
        {
          name: "food2.jpeg",
          url:
            "http://47.106.134.215:9000/file/downloadById?fileId=2015482298763250324&filetype=t"
        }
      ],
      fileList: []
    };
  },
  methods: {
    success(res, file, fileList) {
      console.log(fileList);
      this.$notify({
        title: "成功",
        message: "图片上传成功！",
        type: "success",
        duration: 1000
      });
    },
    remove(file, fileList) {
      console.log(fileList);
    }
  },
  created() {
    let url = this.$getDownload("3123", "t");
    console.log(url);
  }
};
</script>