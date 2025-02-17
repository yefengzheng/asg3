class Cube {
  constructor() {
    this.type = 'cube';
    //this.position = [0.0, 0.0, 0.0];
    this.color = [1.0, 1.0, 1.0, 1.0];
    //this.size = 5.0;
    //this.segments = 10;
    this.matrix = new Matrix4();
    this.textureNum = -2;
  }

  render(){
    //var xy = this.position;
    var rgba = this.color;
    //var size = this.size;
    gl.uniform1i(u_whitchTexture, this.textureNum);
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
    drawTriangle3DUV([0, 0, 0,   1, 1, 0,   1, 0, 0], [0,0, 1,1, 1,0]);
    drawTriangle3DUV([0, 0, 0,   0, 1, 0,   1, 1, 0], [0,0, 0,1, 1,1]);


    gl.uniform4f(u_FragColor, rgba[0] * 0.9, rgba[1] * 0.9, rgba[2] * 0.9, rgba[3]);
    drawTriangle3DUV([0, 1, 0,   0, 1, 1,   1, 1, 1],[0,0, 0,1, 1,1]);
    drawTriangle3DUV([0, 1, 0,   1, 1, 1,   1, 1, 0],[0,0, 1,1, 1,0]);


    gl.uniform4f(u_FragColor, rgba[0] * 0.9, rgba[1] * 0.9, rgba[2] * 0.9, rgba[3]);
    drawTriangle3DUV([1, 0, 0,   1, 0, 1,   1, 1, 1], [0,0, 1,1, 1,0]);
    drawTriangle3DUV([1, 0, 0,   1, 1, 1,   1, 1, 0], [0,0, 0,1, 1,1]);


    gl.uniform4f(u_FragColor, rgba[0] * 0.9, rgba[1] * 0.9, rgba[2] * 0.9, rgba[3]);
    drawTriangle3DUV([0, 0, 0,   0, 1, 0,   0, 1, 1], [0,0, 0,1, 1,1]);
    drawTriangle3DUV([0, 0, 0,   0, 1, 1,   0, 0, 1], [0,0, 1,1, 1,0]);


    gl.uniform4f(u_FragColor, rgba[0] * 0.9, rgba[1] * 0.9, rgba[2] * 0.9, rgba[3]);
    drawTriangle3DUV([0, 0, 1,   1, 0, 1,   1, 1, 1], [0,0, 1,1, 1,0]);
    drawTriangle3DUV([0, 0, 1,   1, 1, 1,   0, 1, 1], [0,0, 0,1, 1,1]);


    gl.uniform4f(u_FragColor, rgba[0] * 0.9, rgba[1] * 0.9, rgba[2] * 0.9, rgba[3]);
    drawTriangle3DUV([0, 0, 0,   1, 0, 0,   1, 0, 1], [0,0, 0,1, 1,1]);
    drawTriangle3DUV([0, 0, 0,   1, 0, 1,   0, 0, 1], [0,0, 1,1, 1,0]);
}
renderfast(){
  //var xy = this.position;
  var rgba = this.color;
  //var size = this.size;
  gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

  gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

  var allverts = [];
  var alluv = [];
  allverts = allverts.concat([0, 0, 0,   1, 1, 0,   1, 0, 0]);
  allverts = allverts.concat([0, 0, 0,   0, 1, 0,   1, 1, 0]);
  alluv = alluv.concat([0,0, 1,1, 1,0]);
  alluv = alluv.concat([0,0, 0,1, 1,1]);

  //gl.uniform4f(u_FragColor, rgba[0] * 0.9, rgba[1] * 0.9, rgba[2] * 0.9, rgba[3]);
  allverts = allverts.concat([0, 1, 0,   0, 1, 1,   1, 1, 1]);
  allverts = allverts.concat([0, 1, 0,   1, 1, 1,   1, 1, 0]);
  alluv = alluv.concat([0,0, 0,1, 1,1]);
  alluv = alluv.concat([0,0, 1,1, 1,0]);


  //gl.uniform4f(u_FragColor, rgba[0] * 0.9, rgba[1] * 0.9, rgba[2] * 0.9, rgba[3]);
  allverts = allverts.concat([1, 0, 0,   1, 0, 1,   1, 1, 1]);
  allverts = allverts.concat([1, 0, 0,   1, 1, 1,   1, 1, 0]);
  alluv = alluv.concat([0,0, 1,1, 1,0]);
  alluv = alluv.concat([0,0, 0,1, 1,1]);


  //gl.uniform4f(u_FragColor, rgba[0] * 0.9, rgba[1] * 0.9, rgba[2] * 0.9, rgba[3]);
  allverts = allverts.concat([0, 0, 0,   0, 1, 0,   0, 1, 1]);
  allverts = allverts.concat([0, 0, 0,   0, 1, 1,   0, 0, 1]);
  alluv = alluv.concat([0,0, 0,1, 1,1]);
  alluv = alluv.concat([0,0, 1,1, 1,0]);


  //gl.uniform4f(u_FragColor, rgba[0] * 0.9, rgba[1] * 0.9, rgba[2] * 0.9, rgba[3]);
  allverts = allverts.concat([0, 0, 1,   1, 0, 1,   1, 1, 1] );
  allverts = allverts.concat([0, 0, 1,   1, 1, 1,   0, 1, 1] );
  alluv = alluv.concat([0,0, 1,1, 1,0]);
  alluv = alluv.concat([0,0, 0,1, 1,1]);


  //gl.uniform4f(u_FragColor, rgba[0] * 0.9, rgba[1] * 0.9, rgba[2] * 0.9, rgba[3]);
  allverts = allverts.concat([0, 0, 0,   1, 0, 0,   1, 0, 1]);
  allverts = allverts.concat([0, 0, 0,   1, 0, 1,   0, 0, 1]);
  alluv = alluv.concat( [0,0, 0,1, 1,1]);
  alluv = alluv.concat([0,0, 1,1, 1,0]);

  drawTriangle3DUV(allverts, alluv);
}
}
