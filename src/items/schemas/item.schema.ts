import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  mainBanners: [
    {
      title: String,
      subtitle: String,
      priority: Number,
      image: String,
      link: String,
    },
  ],
  smallBanners: [
    {
      title: String,
      subtitle: String,
      priority: Number,
      image: String,
      link: String,
    },
  ],
  productBanners: [
    {
      title: String,
      subtitle: String,
      priority: Number,
      image: String,
      link: String,
    },
  ],
});
