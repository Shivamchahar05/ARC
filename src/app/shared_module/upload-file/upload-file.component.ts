import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  img: string[] = [];
  sendimage: string[] = [];
  imageSrc = "";
  deleteimage: string[] = []
  constructor() { }

  ngOnInit(): void {
  }
  onFileChange(event: any) {
    var file = event.dataTransfer
      ? event.dataTransfer.files[0]
      : event.target.files[0];

    var reader = new FileReader();

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

  }
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.imageSrc = reader.result.substr(reader.result.indexOf(',') + 1);

    // let payLoad = {
    //   image: this.imageSrc,
    //   type: 'labs',
    // };
    // this.signup4th.uploadimage(payLoad).subscribe(
    //   (res: any) => {
        this.img.push(e.target.result);

    //     this.sendimage.push(res.image);

    //     this.formservice.register?.get('images')?.patchValue({
    //       images: this.sendimage,

    //     });
    //     console.log(res, 'mmmmmmm');

    //   },
    //   (err) => {
    //     console.log(err, 'Error from image service!');
    //   }
    // );

  }
  removephoto(index: any) {

    console.log(this.sendimage[index], "llllllllllllllll");
    // this.signup4th.deleteImage(this.sendimage[index]).subscribe(res => {
    //   console.log(res, "delete image");
    // }, err => {
    //   console.log(err, "err in delete img!");
    // })
    this.img.splice(index, 1);
    this.sendimage.splice(index, 1);
    // this.formservice.register.patchValue({
    //   images: this.sendimage,
    // });

  }

}
