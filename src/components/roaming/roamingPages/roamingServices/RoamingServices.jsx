import Breadcrumbs from '../../../breadcrumbs/Breadcrumbs';
import style from './RoamingServices.module.scss'
import internet from '../../../../shared/assets/images/roamingImg/internet.png'
import offline from '../../../../shared/assets/images/roamingImg/vneseti.png'
import sms from '../../../../shared/assets/images/roamingImg/sms.png'
import { ServicesBlock } from '../../../../shared/ui/servicesBlock/ServicesBlock';
import {
  NextButton,
  handleNextSlide,
} from '../../../../shared/ui/helpers/NextButton';
import { useState } from 'react';
import { CountriesModal } from '../../../../shared/ui/countriesModal/CountriesModal';
import { DataModal } from '../../../../shared/ui/dataModal/DataModal';
import { useLoaderData } from 'react-router-dom';

export const RoamingServices = () => {
  const data = useLoaderData();


  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/mobile-connect/roaming',
      breadcrumb: 'Роуминг',
    },
    {
      pathname: '/mobile-connect/roaming/roamingServices',
      breadcrumb: 'Услуги для роуминга',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isPriceVisible, setIsPriceVisible] = useState(false);


  const handleNextSlideClick = () => {
    handleNextSlide(currentSlide, setCurrentSlide);
  };
  const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
  
  const links = data?.map(item => ({
    link: `/mobile-connect/roaming/roamingServices/${item.id}`
  }))
  const addLinks = data?.map((item, index) => ({
    ...item,
    link: links[index]?.link
  }))

  const servicesData = addLinks?.map((item, index) => ({
    id: item.id,
    title: item.title,
    internetLogo: internet,
    internetSpan: (item.gigabytes),
    offlineLogo: offline,
    offlineSpan: (item.minutes),
    offlineLogo2: offline,
    offlineSpan2: item.roaming_countries.length,
    offlineText2: "стран действия",
    smsLogo: sms,
    smsSpan: `${item.it_work}`,
    priceNum: item.price,
    priceSpan: "с",
    link: item.link
  }));



  return (
    <>
      <section className={style.roumingServices}>
        <div className={style.container}>
          <Breadcrumbs crumbs={breadcrumbs} />
          <h1 className={style.roumingServices__title}>Услуги для роуминга</h1>
          <div className={style.roumingServices__hidden}>
            <div className={style.roumingServices__blocks} style={{ transform: `translateX(-${currentSlide * 22}%)` }}>
              {servicesData && servicesData?.map(service => (
                <ServicesBlock
                  key={service.id}
                  title={service.title}
                  internetLogo={service.internetLogo}
                  internetSpan={service.internetSpan}
                  internetText={service.internetText}
                  offlineLogo={service.offlineLogo}
                  offlineSpan={service.offlineSpan}
                  offlineText={service.offlineText}
                  offlineLogo2={service.offlineLogo2}
                  offlineSpan2={service.offlineSpan2}
                  offlineText2={service.offlineText2}
                  smsLogo={service.smsLogo}
                  smsSpan={service.smsSpan}
                  priceNum={service.priceNum}
                  priceSpan={service.priceSpan}
                  setModalOpen={setModalOpen}
                  setSelectedPrice={setSelectedPrice}
                  setIsPriceVisible={setIsPriceVisible}
                  link={service.link}
                />
              ))}
            </div>
            <NextButton handleClick={handleNextSlideClick} />
          </div>
        </div>
      </section>
      {modalOpen && (
        <CountriesModal setModalOpen={setModalOpen} priceNum={selectedPrice} setIsOpenModal={setIsOpenModal} isPriceVisible={isPriceVisible} setIsPriceVisible={setIsPriceVisible} />
      )}
      {isOpenModal && (
        <DataModal setIsOpenModal={setIsOpenModal} />
      )}
    </>
  )
}