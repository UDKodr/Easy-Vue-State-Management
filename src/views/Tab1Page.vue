<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>About Me</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">About Me</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-header>
        <ion-label>Version: {{ GlobalVariables.version }}</ion-label>
      </ion-header>
      <ion-header>
        <ion-toolbar>
          <ion-input placeholder="What Is Your Name?" v-model="GlobalVariables.myName"></ion-input>
          <ion-button color="tertiary" slot="end" size="small" @click="GlobalVariables.changeNames()">Save Name
          </ion-button>
        </ion-toolbar>
      </ion-header>
      <ion-header>
        <ion-title>Welcome {{ GlobalVariables.myName }} Enjoy This Repo!</ion-title>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonLabel,
  IonButton,
} from "@ionic/vue";
import { GlobalVariables } from "@/components/GlobalVariables";

export default defineComponent({
  name: "Tab1Page",

  data() {
    return {
      GlobalVariables,
    };
  },

  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonLabel, IonButton,},
});
</script>
