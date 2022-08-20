import { reactive } from "vue";

export const GlobalVariables = reactive({
  
    variant: localStorage.getItem("variant"),
    version: "1.0",
    internalVersion: "0.13",

})