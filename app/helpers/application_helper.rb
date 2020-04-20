module ApplicationHelper
  def analytics_token
    ENV['GOOGLE_ANALYTICS_TOKEN']
  end
end
