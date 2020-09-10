class GlitchWorks::DangerBlock < GlitchWorks::Block

  def bind_params (params)
    @add_break = params[:add_break]
  end

  def internal_render
    <<~DANGER
    #{"<div>&nbsp;</div>" if @add_break}
        <p>
          #{markdown_converter.convert(@text)}
        </p>
    DANGER
  end
end

Liquid::Template.register_tag('danger', GlitchWorks::DangerBlock)