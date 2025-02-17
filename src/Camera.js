class Camera {
    constructor() {
        this.eye = new Vector3([0, 0, 1]);
        this.at = new Vector3([0, 0, -100]);
        this.up = new Vector3([0, 1, 0]);
        this.updateViewMatrix();
    }

    updateViewMatrix() {
        this.viewMatrix = new Matrix4();
        this.viewMatrix.setLookAt(
            this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],
            this.at.elements[0], this.at.elements[1], this.at.elements[2],
            this.up.elements[0], this.up.elements[1], this.up.elements[2]
        );
    }

    moveForward(speed = 0.1) {
        let f = new Vector3(this.at.elements).sub(this.eye).normalize();
        this.eye = new Vector3(this.eye.elements).add(f.mul(speed));
        this.at = new Vector3(this.at.elements).add(f.mul(speed));
        this.updateViewMatrix();
    }

    moveBackwards(speed = 0.1) {
        let b = new Vector3(this.eye.elements).sub(this.at).normalize();
        this.eye = new Vector3(this.eye.elements).add(b.mul(speed));
        this.at = new Vector3(this.at.elements).add(b.mul(speed));
        this.updateViewMatrix();
    }

    moveRight(speed = 0.1) {
        let f = new Vector3(this.at.elements).sub(this.eye).normalize();
        let s = Vector3.cross(this.up, f).normalize();  // Corrected cross product usage
        this.eye = new Vector3(this.eye.elements).sub(s.mul(speed));
        this.at = new Vector3(this.at.elements).sub(s.mul(speed));
        this.updateViewMatrix();
    }

    moveLeft(speed = 0.1) {
        let f = new Vector3(this.at.elements).sub(this.eye).normalize();
        let s = Vector3.cross(this.up, f).normalize();  // Fix: Correct order for right direction
        this.eye = new Vector3(this.eye.elements).add(s.mul(speed));
        this.at = new Vector3(this.at.elements).add(s.mul(speed));
        this.updateViewMatrix();
    }

    panLeft(alpha = 2) {
        let f = new Vector3(this.at.elements).sub(this.eye);
        let rotationMatrix = new Matrix4();
        rotationMatrix.setRotate(alpha, this.up.elements[0], this.up.elements[1], this.up.elements[2]);
        let f_prime = rotationMatrix.multiplyVector3(f);
        this.at = new Vector3(this.eye.elements).add(f_prime);
        this.updateViewMatrix();
    }

    panRight(alpha = 2) {
        let f = new Vector3(this.at.elements).sub(this.eye);
        let rotationMatrix = new Matrix4();
        rotationMatrix.setRotate(-alpha, this.up.elements[0], this.up.elements[1], this.up.elements[2]);
        let f_prime = rotationMatrix.multiplyVector3(f);
        this.at = new Vector3(this.eye.elements).add(f_prime);
        this.updateViewMatrix();
    }
}
