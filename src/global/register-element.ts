import { ElAlert,ElButton,ElTabs,ElTabPane, ElForm, ElFormItem, ElInput, ElRadio, ElCheckbox, ElLink } from "element-plus";
import { App } from "vue";


const components=[
  ElAlert,
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElCheckbox,
  ElLink
] 

export default function (app:App){
  for(const component of components){
    app.component(component.name,component)
  }
}