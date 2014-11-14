class Mailer < ActionMailer::Base

  def contact_me(params)
    @params = params
    email_with_name = "#{params[:mail][:name]} <#{params[:mail][:email]}>"
    mail(from: email_with_name, to: "norrisnakagaki@gmail.com", subject: "Mail from Portfolio site")
  end

end
