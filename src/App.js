import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Products from './components/Products'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListProducts from './components/ListProducts';
import EditProduct from './components/EditProduct';
import swal from 'sweetalert';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import DangKi from './components/DangKi';
import Cart from './components/Cart';
import LienHe from './components/LienHe';
import TinTuc from './components/TinTuc';
import HistoryPay from './components/HistoryPay';

function App() {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (localStorage && localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
      console.log('load 1111');
    }
    if (localStorage && localStorage.getItem('user') && localStorage.getItem(`${JSON.parse(localStorage.getItem('user')).username}`)) {
      setItems(JSON.parse(localStorage.getItem(`${JSON.parse(localStorage.getItem('user')).username}`)));
      console.log('load');
    }
    loadDB();
  }, []);
  useEffect(() => {
    loadPays();
  }, []);
  const API_PRODUCT = "http://localhost:1337/products";
  const loadDB = () => {
    fetch(API_PRODUCT)
      .then(response => response.json())
      .then(data => setProducts(data));
  }
  const loadPays = () => {
    if (localStorage && localStorage.getItem('user')) {
      var user = JSON.parse(localStorage.getItem('user'));
      fetch(`${API_PAY}?user=${user.username}`)
        .then(response => response.json())
        .then(data => setPays(data))
        .then(setPays(pays.filter(pay => pay)));
    }
  }


  const onEditProduct = (newProduct) => {
    fetch(`${API_CATEGORY}/${newProduct.category.id !== undefined ? newProduct.category.id : newProduct.category}`)
      .then(response => response.json())
      .then(data => newProduct.category = data)
      .then(fetch(`${API_PRODUCT}/${newProduct.id}`,
        {
          method: "PUT", //hoac PATCH
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProduct)
        }).then(response => response.json())
        .then(() => swal("Update Successfuly", { icon: "success" }))
        .then(() => loadDB()))
      .then(() => { window.location = "http://localhost:3000/list-products#portfolio"; });
  }

  const onDeleteProduct = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`${API_PRODUCT}/${id}`, {
            method: 'DELETE', // or 'PUT'
          })
            .then(response => response.json())
            .then(() => swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            })).then(() => loadDB());
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }


  const API_CATEGORY = "http://localhost:1337/categories";

  const onAddProduct = (newProduct) => {
    fetch(`${API_CATEGORY}/${newProduct.category}`)
      .then(response => response.json())
      .then(data => newProduct.category = data)
      .then(fetch(API_PRODUCT,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProduct)
        })
        .then(response => response.json())
        .then(() => swal("Them thanh cong!", {
          icon: "success",
        }))
        .then(() => loadDB()))
      .then(() => { window.location = "http://localhost:3000/list-products#portfolio"; });
  }

  const onListSearch = (search) => {
    console.log(search);
    fetch(`${API_PRODUCT}?name_contains=${search}`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }

  const onHamSort = (bien) => {
    console.log(bien);
    if (bien === 1) {
      fetch(`${API_PRODUCT}?_sort=name:ASC`)
        .then(response => response.json())
        .then(data => setProducts(data));
    }
    if (bien === 2) {
      fetch(`${API_PRODUCT}?_sort=name:DESC`)
        .then(response => response.json())
        .then(data => setProducts(data));
    }
    if (bien === 3) {
      fetch(`${API_PRODUCT}?_sort=price:ASC`)
        .then(response => response.json())
        .then(data => setProducts(data));
    }
    if (bien === 4) {
      fetch(`${API_PRODUCT}?_sort=price:DESC`)
        .then(response => response.json())
        .then(data => setProducts(data));
    }
  }

  const onHamRole = (role) => {
    fetch(`${API_PRODUCT}?category.id=${role}`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }

  const onHamMaxPrice = (maxPrice) => {
    fetch(`${API_PRODUCT}?price_lt=${maxPrice}`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }

  const API_USER = "http://localhost:1337/accounts";
  const onDangNhap = (newUser) => {
    console.log(newUser);
    fetch(`${API_USER}?username=${newUser.username}`)
      .then(response => response.json())
      .then(data => {
        if (data !== null && data !== undefined && data.length > 0) {
          if (data[0].pass === newUser.pass) {
            console.log(data[0]);
            setUser(data[0]);
            localStorage.setItem('user', JSON.stringify(data[0]));
            swal("Đăng nhập thành công", { icon: "success" });
            window.location = "http://localhost:3000/";
          } else {
            swal("Sai mật khẩu");
          }
        } else {
          swal("Tài khoản không tồn tại");
        }
      });
  }

  const onDangKiUser = (newUser) => {
    console.log(newUser);
    fetch(API_USER,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(response => response.json())
      .then(() => swal("Đăng kí thành công", {
        icon: "success",
      }))
      .then(() => { window.location = "http://localhost:3000/dang-nhap"; });
  }

  const onHamDangXuat = () => {
    swal({
      title: "Xác nhận",
      text: "Bạn có muốn đăng xuất hay không",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          setUser({});
          localStorage.setItem('user', JSON.stringify({}));
          swal("Đăng xuất thành công.", { icon: "success", })
          window.location = "http://localhost:3000/";
        } else {
          swal("Hủy đăng xuất, bạn vẫn chưa đăng xuất.");
        }
      });
  }

  const [items, setItems] = useState([]);
  const onMuaItem = (item) => {
    if (user.username !== undefined) {
      for (var x of items) {
        if (x.product === item.product) {
          x.quantity = x.quantity * 1 + item.quantity * 1;
          setItems(items.filter(item => item));
          localStorage.setItem(`${user.username}`, JSON.stringify(items));
          swal("Mua hàng thành công", { icon: "success", });
          return;
        }
      }
      items.push(item);
      setItems(items.filter(item => item));
      localStorage.setItem(`${user.username}`, JSON.stringify(items));
      swal("Mua hàng thành công", { icon: "success", });
    } else {
      swal("Bạn phải đăng nhập mới mua hàng được.")
    }
  }

  const onDeleteItem = (bien) => {
    swal({
      title: "Xác nhận",
      text: "Bạn có muốn xóa mặt hàng này khỏi giỏ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          setItems(items.filter(item => item !== bien));
          localStorage.setItem(`${user.username}`, JSON.stringify(items));
        } else {
          swal("Hủy xóa, mặt hàng này vẫn còn nguyên.");
        }
      });
  }

  const onChangeQuantity = (newItem) => {
    console.log(newItem);
    for (var x of items) {
      if (x.product.id * 1 === newItem.id * 1) {
        console.log("1");
        x.quantity = newItem.quantity;
        localStorage.setItem(`${user.username}`, JSON.stringify(items));
        setItems(items.filter(item => item));
        return;
      }
    }
  }

  const [hide, setHide] = useState({
    loc: "d-none col-lg-4 mr-auto p-0",
    sp: "col-lg-12 ml-auto p-0",
    status: 0
  })

  const onHide = () => {
    if (hide.status === 0) {
      setHide({
        loc: "d-block col-lg-4 mr-auto p-0",
        sp: "col-lg-8 ml-auto p-0",
        status: 1
      })
    } else {
      setHide({
        loc: "d-none col-lg-4 mr-auto p-0",
        sp: "col-lg-12 ml-auto p-0",
        status: 0
      })
    }
  }

  const [pays, setPays] = useState([]);
  const API_PAY = "http://localhost:1337/pay-histories"
  const onThanhToan = () => {
    console.log(1);
    swal({
      title: "Xác nhận",
      text: "Bạn có muốn thanh toán giỏ hàng?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          var pay = {
            user: user.username,
            time: new Date() + "",
            items: items
          };
          console.log(pay);
          fetch(API_PAY,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(pay)
            })
            .then(response => response.json())
            .then(() => swal("Thanh toán thành công.", { icon: "success" }))
            .then(() => loadPays());
          setItems([]);
          localStorage.setItem(`${user.username}`, JSON.stringify([]));
        } else {
          swal("Hủy thanh toán");
        }
      });
  }

  return (
    <Router>
      {/* Navigation*/}
      <Navbar user={user} items={items} hamDangXuat={onHamDangXuat} />
      {/* Masthead*/}
      <Header />
      {/* Contact Section*/}
      {/* Portfolio Section*/}
      {/* chinh sua tren trang web*/}
    {/* chinh sua tren trang web*/}
      <Switch>
        <Route path="/dang-nhap">
          <Login dangNhap={onDangNhap} />
        </Route>
        <Route path="/dang-ki">
          <DangKi dangKiUser={onDangKiUser} />
        </Route>
        <Route exact path="/">
          <div className="d-flex flex-row">
            <div className={hide.loc}>
              <Contact listSearch={onListSearch} hamSort={onHamSort} hamRole={onHamRole} hamMaxPrice={onHamMaxPrice} />
            </div>
            <div className={hide.sp}>
              <Products products={products} muaItem={onMuaItem} hamHide={onHide} hide={hide} />
            </div>
          </div>
        </Route>
        <Route path="/list-products">
          <div className="d-flex flex-row">
            <div className={hide.loc}>
              <Contact listSearch={onListSearch} hamSort={onHamSort} hamRole={onHamRole} hamMaxPrice={onHamMaxPrice} />
            </div>
            <div className={hide.sp}>
              <ListProducts products={products} deleteProduct={onDeleteProduct} hamHide={onHide} hide={hide} />
            </div>
          </div>
        </Route>
        <Route path="/edit-product/:id">
          <EditProduct editProduct={onEditProduct} />
        </Route>
        <Route path="/add-product">
          <AddProduct addProduct={onAddProduct} />
        </Route>
        <Route path="/cart">
          <Cart items={items} deleteItem={onDeleteItem} changeQuantity={onChangeQuantity} thanhToan={onThanhToan} />
        </Route>
        <Route path="/lien-he">
          <LienHe />
        </Route>
        <Route path="/tin-tuc">
          <TinTuc />
        </Route>
        <Route path="/pay-history">
          <HistoryPay pay={pays} />
        </Route>
      </Switch>
      {/* About Section*/}
      <About />
      {/* Footer*/}
      <Footer />
    </Router>
  );
}

export default App;
