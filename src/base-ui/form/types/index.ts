type IFormType = "input" | "password" | "datepicker" | "select";

export interface IFromItem {
  field: string;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: any;
  //针对select
  options?: any[];
  //针对特殊属性
  otherOptions?: any;
  isHidden?: boolean;
}

export interface IForm {
  formItems: IFromItem[];
  labelWidth?: string;
  colLayout?: any;
  itemStyle?: any;
}
