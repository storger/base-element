<template>
    <div>
        <Top-title icon="icon-icon_home" title="消息" stitle="系统消息" crumbs="false"></Top-title>
        <el-row :gutter="24">
            <el-col :md="6">
                <el-card>

                </el-card>
            </el-col>
            <el-col :md="18">
                <el-card>
                    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;text-align:left" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column label="消息源" width="120">
                            <template slot-scope="scope">{{ scope.row.name }}</template>
                        </el-table-column>
                        <el-table-column prop="content" label="内容">
                        </el-table-column>
                        <el-table-column prop="time" label="时间" show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                    <el-pagination background layout="prev, pager, next" :page-size="8" :total="total" style="margin-top:10px" @current-change="queryData">
                    </el-pagination>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import TopTitle from "../../components/toptitle";
export default {
  data() {
    return {
      total: 0,
      tableData: [],
      multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    queryData(page) {
      this.$post("message").then(data => {
        this.total = data.data.total;
        this.tableData = data.data.data;
      });
    }
  },
  components: {
    TopTitle
  },
  created() {
      this.queryData();
  }
};
</script>
