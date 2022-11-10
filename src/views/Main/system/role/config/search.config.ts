import { IForm } from "@/base-ui/form";

export const formConfig: IForm = {
  labelWidth: "120px",
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名",
      placeholder: "请输入角色名",
    },
    {
      field: "intro",
      type: "input",
      label: "权限介绍",
      placeholder: "请输入权限介绍",
    },
    {
      field: "createTime",
      type: "datepicker",
      label: "创建时间",
      placeholder: "选择时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
      },
    },
  ],
  // colLayout: { span: 8 },
  itemStyle: {
    padding: "10px 40px",
  },
};
