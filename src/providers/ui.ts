import { ToastController, ToastOptions } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class UiProvider {
    constructor(private toastCtrl: ToastController) {
    }

    showToast(message: string, toastOptions?: ToastOptions) {
        const options: ToastOptions = { message, duration: 3000, ...toastOptions };
        const toast = this.toastCtrl.create(options);
        toast.present();
    }
}