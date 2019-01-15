class Post < ApplicationRecord
  mount_uploader :image, ImageUploader
  attr_accessor :domain

  def to_meta_tags
    url_helper = Rails.application.routes.url_helpers
    {
      title: title,
      content: content,
      og: {
        url: domain + url_helper.post_path(id: id),
        type: 'post',
        title: title,
        description: content,
        image: domain + image&.url,
        site_name: 'Social Share'
      }
    }
  end
end
