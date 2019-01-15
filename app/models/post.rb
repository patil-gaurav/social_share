class Post < ApplicationRecord
  mount_uploader :image, ImageUploader
  attr_accessor :domain

  def to_meta_tags
    url_helper = Rails.application.routes.url_helpers
    {
      title: title,
      content: content,
      og: {
        url: "https://boiling-fortress-75740.herokuapp.com" + url_helper.post_path(id: id),
        type: 'post',
        title: title,
        description: content,
        image: "https://boiling-fortress-75740.herokuapp.com" + image&.url,
        site_name: 'Social Share'
      }
    }
  end
end
