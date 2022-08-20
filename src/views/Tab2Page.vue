<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>My Favorites</ion-title>
        <ion-button slot="end" color="tertiary" @click="GlobalVariables.saveFavs()">
        <ion-icon slot="icon-only" :icon="saveSharp"></ion-icon>
      </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

    
        <ion-list>
        <ion-radio-group v-model="GlobalVariables.favColor">
          <ion-list-header color="tertiary">
            <ion-label> Favorite Color</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>Red</ion-label>
            <ion-radio value="Red"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Blue</ion-label>
            <ion-radio value="Blue"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Green</ion-label>
            <ion-radio value="Green"></ion-radio>
          </ion-item>

        </ion-radio-group>
      </ion-list>

        <ion-list>
        <ion-radio-group v-model="GlobalVariables.favFood">
          <ion-list-header color="tertiary">
            <ion-label> Favorite Food</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>Pizza</ion-label>
            <ion-radio value="Pizza"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Burger</ion-label>
            <ion-radio value="Burger"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Cereal</ion-label>
            <ion-radio value="Cereal"></ion-radio>
          </ion-item>
 </ion-radio-group>
      </ion-list>
   <ion-list>
        <ion-radio-group v-model="GlobalVariables.favFramework">
          <ion-list-header color="tertiary">
            <ion-label> Favorite Framework </ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>Angular</ion-label>
            <ion-radio value="Angular"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>React</ion-label>
            <ion-radio value="React"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Vue of Course!</ion-label>
            <ion-radio value="Vue of Course!"></ion-radio>
          </ion-item>

        </ion-radio-group>
      </ion-list>   
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GlobalVariables, } from "@/components/GlobalVariables";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
} from "@ionic/vue";
import { 
 saveSharp
} from 'ionicons/icons';
export default defineComponent({
  name: "Tab2Page",
  data() {
    return {
      GlobalVariables,
    };
  },



  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
  IonButton,
  IonIcon,
    IonList,
    IonListHeader,
    IonRadio,
    IonRadioGroup,
  },
    setup() {
    return {
     saveSharp
    }
  }
});
</script>
