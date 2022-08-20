<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>About</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-title>About Me</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-title>My Name: {{GlobalVariables.myName}}</ion-title>
            </ion-item>
            <ion-item>
              <ion-title>Fav Color: {{ GlobalVariables.favColor}}</ion-title>
            </ion-item>
            <ion-item>
              <ion-title>Fav Food: {{ GlobalVariables.favFood }}</ion-title>
            </ion-item>
            <ion-item>
              <ion-title>Fav Framework: {{ GlobalVariables.favFramework }}</ion-title>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>About App</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-title>Variant: {{ GlobalVariables.variant }}</ion-title>
            </ion-item>
            <ion-item>
              <ion-title>Version: {{ GlobalVariables.version }}</ion-title>
            </ion-item>
            <ion-item>
              <ion-title>Internal Version:
                {{ GlobalVariables.internalVersion }}</ion-title>
            </ion-item>
            <ion-item>
              <ion-title></ion-title>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GlobalVariables } from "@/components/GlobalVariables";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
} from "@ionic/vue";

export default defineComponent({
  name: "Tab3Page",
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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonPage,
  },
});
</script>
