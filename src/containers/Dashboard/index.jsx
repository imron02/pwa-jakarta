import React, { Component } from 'react';
import { Avatar, Divider } from 'antd';

import BaseContainer from '../index';
import MonasImage from '../../assets/images/monas.jpg';
import './index.scss';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <BaseContainer {...this.props}>
        <Avatar shape="square" size={150} src={MonasImage} className="avatar-logo" />
        <article>
          <p>
            <span>D</span>aerah Khusus Ibukota Jakarta (DKI Jakarta) adalah ibu kota negara dan
            kota terbesar di Indonesia. Jakarta merupakan satu-satunya kota di Indonesia yang
            memiliki status setingkat provinsi. Jakarta terletak di pesisir bagian barat laut Pulau
            Jawa. Dahulu pernah dikenal dengan beberapa nama di antaranya Sunda Kelapa, Jayakarta,
            dan Batavia. Di dunia internasional Jakarta juga mempunyai julukan J-Town, atau lebih
            populer lagi The Big Durian karena dianggap kota yang sebanding New York City
            (Big Apple) di Indonesia.
          </p>
        </article>
        <Divider />
        <article>
          <p>
            Jakarta memiliki luas sekitar 661,52 km² (lautan: 6.977,5 km<sup>2</sup>), dengan penduduk
            berjumlah 10.374.235 jiwa (2017). Wilayah metropolitan Jakarta (Jabodetabek) yang
            berpenduduk sekitar 28 juta jiwa, merupakan metropolitan terbesar di Asia Tenggara
            atau urutan kedua di dunia.
          </p>
          <p>
            Sebagai pusat bisnis, politik, dan kebudayaan, Jakarta merupakan tempat berdirinya
            kantor-kantor pusat BUMN, perusahaan swasta, dan perusahaan asing. Kota ini juga menjadi
            tempat kedudukan lembaga-lembaga pemerintahan dan kantor sekretariat ASEAN. Jakarta
            dilayani oleh dua bandar udara, yakni Bandara Soekarno–Hatta dan Bandara Halim
            Perdanakusuma, serta tiga pelabuhan laut di Tanjung Priok, Sunda Kelapa, dan Ancol.
          </p>
        </article>
      </BaseContainer>
    );
  }
}

export default Dashboard;
