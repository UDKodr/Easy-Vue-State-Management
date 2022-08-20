import { alert } from "ionicons/icons";
import { reactive} from "vue";

export const GlobalVariables = reactive({

    myName: "",
    favColor: "",
    favFood: "",
    favFramework: "",

    variant: localStorage.getItem("variant"),
    version: "3",
    internalVersion: ".1",

    changeNames() {
        this.myName = "Viewer"
},
    saveFavs() {
        this.favColor = "Red"
}
})