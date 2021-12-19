import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
  import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    collection,
    addDoc,
  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
  // console.log(getAuth);
  
  // document.getElementById("register").onclick = function () {
  //   const email = document.getElementById("email").value;
  //   const password = document.getElementById("password").value;
  
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //       console.log("Đăng ký thành công");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //       console.log("Đăng ký lỗi");
  //     });
  // };
  
  // document.getElementById("login").onclick = function () {
  //   const email = document.getElementById("email").value;
  //   const password = document.getElementById("password").value;
  
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //       console.log("Đăng nhập thành công");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log("Đăng nhập chưa thành công");
  //     });
  // };
  
  // create variable db
  const db = getFirestore();
  // Thêm
  document.getElementById("add").onclick = async function () {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const idStudent = document.getElementById("id-student").value;
    const classroom = document.getElementById("classroom").value;
  
    const student = {
      name,
      age,
      idStudent,
      classroom,
    };
  
    // setDoc dùng khi add mà phải chỉ định id
    // await setDoc(doc(db, "list-students", idStudent), student);
    // muốn tạo id tự động thì sẽ dùng add
    const docRef = await addDoc(collection(db, "hocsinh"), student);
    console.log("Document written with ID: ", docRef.id);
  };
  
  // Xem
  document.getElementById("view").onclick = async function () {
    const idStudent = document.getElementById("id-student").value;
  
    const docRef = doc(db, "list-students", idStudent);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      document.getElementById("name").value = docSnap.data().name;
      document.getElementById("age").value = docSnap.data().age;
      document.getElementById("classroom").value = docSnap.data().classroom;
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  };
  
  // Sửa
  document.getElementById("update").onclick = async function () {
    const idStudent = document.getElementById("id-student").value;
    
    const cityRef = doc(db, 'list-students', 'student');

    await updateDoc(cityRef, {
        capital: deleteField()
    });
  };

  
  // Xóa
  document.getElementById("delete").onclick = async function () {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const idStudent = document.getElementById("id-student").value;
    const classroom = document.getElementById("classroom").value;
  
    const student = {
      name,
      age,
      idStudent,
      classroom,
    };


    await deleteDoc(doc(db, "list-students"), student);
    console.log("Document written with ID: ", docRef.id);
  };