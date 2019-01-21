<template>
    <div>
        <Top-title icon="el-icon-key" title="个人中心" stitle="个人信息和设置" crumbs="false"></Top-title>
        <el-card>
            <h2 slot="header" style="text-align:left;color:#E6A23C">个人信息</h2>
            <el-row :gutter="24">
                <el-col :md="8">
                    <el-form :model="ruleForm" label-position="right" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户名：" prop="userName">
                            <el-input v-model="ruleForm.userName"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱：" prop="email">
                            <el-input v-model="ruleForm.email"></el-input>
                        </el-form-item>
                        <el-form-item label="公司：" style="text-align:left">
                            上古网络科技有限公司
                        </el-form-item>
                        <el-form-item label="部门：" style="text-align:left">
                            研发部
                        </el-form-item>
                        <el-form-item label="登录密码：" style="text-align:left">
                            <el-button type="text" @click="dialogFormVisible = true">修改密码</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="success">保存</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-card>
        <el-dialog title="修改密码" width="500px" :visible.sync="dialogFormVisible">
            <el-form :model="dialogForm" label-position="left" :rules="rules" label-width="100px">
                <el-form-item label="原密码" prop="passWord">
                    <el-input v-model="dialogForm.prePassWord"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input v-model="dialogForm.newPassWord"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码">
                    <el-input v-model="dialogForm.surePassWord"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import TopTitle from "../../components/toptitle";
export default {
  data() {
    return {
      ruleForm: {
        userName: "admin",
        email: "2801401506@qq.com"
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱格式", trigger: "blur" }
        ],
        passWord: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ]
      },
      dialogForm: {
        prePassWord: "",
        newPassWord: "",
        surePassWord: ""
      },
      dialogFormVisible: false
    };
  },
  components: {
    TopTitle
  }
};
</script>
