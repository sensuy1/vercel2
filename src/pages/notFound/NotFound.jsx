import styles from './NotFound.module.css';
import notFound_img from '../../shared/assets/images/notFound/notFound.png';
import { Button } from '../../shared/ui/customButton/Button';
import { Footer } from '../../components/footer/Footer';
import img from '../../shared/assets/images/notFound/404.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className={styles.head_service}>
      <div className={styles.img_header} >
       <img className={styles.img} src={img} alt="" />
      </div>
      <div className={styles.service_container}>
        <div className={styles.service_block}>
          <h1 className={styles.head_title}>УПССС... Страница не найдена</h1>
          <p className={styles.head_text}>
            К сожалению, страница, которую вы ищете, не существует. Возможно, она была удалена, перемещена или вы просто ошиблись в адресе.
          </p>
          <div className={styles.head_footer}>
            <Link to={'http://localhost:5173/'} >
              <Button className={styles.head_btn}>На Главную</Button>
            </Link>
          </div>
        </div>
        <img className={styles.head_img} src={notFound_img} alt="head" />

      </div>

      {/* <footer className={styles.footer_service} > 
        <Footer footer={styles.footer_block} mad_line={styles.mad_lines}  styleMadeLine={styles.made_line} styleNav={styles.navigation} styleLine={styles.line} /> 
      </footer> */}
    </section>
  );
};

export default NotFound;
