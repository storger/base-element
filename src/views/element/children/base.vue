<template>
    <div>
        <Top-title icon="icon-fangda" title="基本组件" stitle="element-ui 的基本UI组件" crumbs="false"></Top-title>
        <el-card >
            <h2 slot="header" style="text-align:left;color:#E6A23C">Button</h2>
            <el-row :gutter="24">
                <el-col :md="14" :sm="24" style="text-align:left;">
                    <el-button>默认按钮</el-button>
                    <el-button type="primary">主要按钮</el-button>
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="info">信息按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger" disabled>危险按钮</el-button><hr>
                    <el-button plain>朴素按钮</el-button>
                    <el-button type="primary" plain>主要按钮</el-button>
                    <el-button type="success" plain>成功按钮</el-button>
                    <el-button type="info" plain>信息按钮</el-button>
                    <el-button type="warning" plain>警告按钮</el-button>
                    <el-button type="danger" plain>危险按钮</el-button><hr>
                    <el-button round>圆角按钮</el-button>
                    <el-button type="primary" round>主要按钮</el-button>
                    <el-button type="success" round>成功按钮</el-button>
                    <el-button type="info" round>信息按钮</el-button>
                    <el-button type="warning" round>警告按钮</el-button>
                    <el-button type="danger" round>危险按钮</el-button><hr>
                    <el-button icon="el-icon-search" circle></el-button>
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button type="success" icon="el-icon-check" circle></el-button>
                    <el-button type="info" icon="el-icon-message" circle></el-button>
                    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </el-col>
                <el-col :md="10" :sm="24" style="text-align:left;border-left:1px solid #ccc">
                    <h4>文字按钮</h4>
                    <el-button type="text">文字按钮</el-button>
                    <el-button type="text" disabled>文字按钮</el-button>
                    <h4>图标按钮</h4>
                    <el-button type="primary" icon="el-icon-edit"></el-button>
                    <el-button type="primary" icon="el-icon-share"></el-button>
                    <el-button type="primary" icon="el-icon-delete"></el-button>
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                    <el-button type="primary">上传
                        <i class="el-icon-upload el-icon--right"></i>
                    </el-button>
                    <h4>按钮组</h4>
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                        <el-button type="primary">下一页
                            <i class="el-icon-arrow-right el-icon--right"></i>
                        </el-button>
                    </el-button-group>
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-edit"></el-button>
                        <el-button type="primary" icon="el-icon-share"></el-button>
                        <el-button type="primary" icon="el-icon-delete"></el-button>
                    </el-button-group>
                    <h4>加载中</h4>
                    <el-button type="primary" :loading="true">加载中</el-button>
                    <h4>不同大小</h4>
                    <el-row>
                        <el-button>默认按钮</el-button>
                        <el-button size="medium">中等按钮</el-button>
                        <el-button size="small">小型按钮</el-button>
                        <el-button size="mini">超小按钮</el-button>
                    </el-row>
                    <el-row>
                        <el-button round>默认按钮</el-button>
                        <el-button size="medium" round>中等按钮</el-button>
                        <el-button size="small" round>小型按钮</el-button>
                        <el-button size="mini" round>超小按钮</el-button>
                    </el-row>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import TopTitle from "../../../components/toptitle";
export default {
  components: {
    TopTitle
  },
  created () {
      setTimeout(() => {
          this.loading = false;
      }, 1000);
  }
};
</script>
