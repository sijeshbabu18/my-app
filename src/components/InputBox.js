import React, { forwardRef } from 'react';
import './InputBox.scss';

const InputBox = forwardRef(function InputBox(
  {
    name,
    type = 'text',
    maxLength,
    value,
    placeholder,
    disabled,
    labelText,
    onClear,
    error,
    success,
    onChange,
    icon = null,
    iconOnClick = () => {},
    closeEnabled = false,
    width = 'auto',
    required,
    isAadhaarType = false,
    isEmailType = false,
    prefix,
    onPaste,
    onCut,
    onCopy,
    dir = 'ltr',
    ...rest
  },
  ref,
) {
  const inputId = rest.id || name;
  const errorId = error && inputId ? `${inputId}-error` : undefined;

  const formatDisplay = (inputValue) => {
    if (isAadhaarType && inputValue) {
      return inputValue
        .replace(/\s/g, '')
        .replace(/(\d{4})(?=\d)/g, '$1 ')
        .trim();
    }
    return inputValue;
  };

  const handleChange = (event) => {
    debugger;
    const input = event.target;
    let cursor = input.selectionStart;
    const rawValue = isAadhaarType
      ? input.value.replace(/\s/g, '')
      : input.value;

    if (isEmailType) {
      const emailRegex =
        /^(?!.*(?:\.\.|--|\.-|-\.|@\.|-@|\.@))(?=.{3,254}$)[a-zA-Z0-9]+(?:[._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:[.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
      const isValid = emailRegex.test(input.value);

      onChange?.({
        ...event,
        target: {
          ...input,
          value: input.value,
          name,
          isValid,
          errorMessage: isValid ? '' : 'Please enter a valid email address',
        },
      });
      return;
    }

    if (isAadhaarType) {
      const isDeleteBackward =
        event.nativeEvent?.inputType === 'deleteContentBackward';
      if (isDeleteBackward && formatDisplay(value)?.[cursor] === ' ') {
        cursor -= 1;
      }

      onChange?.({
        ...event,
        target: { ...input, value: rawValue, name },
      });

      window.setTimeout(() => {
        const formatted = formatDisplay(rawValue);
        if (event.nativeEvent?.inputType === 'insertFromPaste') {
          input.setSelectionRange(formatted.length, formatted.length);
        } else {
          if (formatted[cursor - 1] === ' ') cursor += 1;
          input.setSelectionRange(cursor, cursor);
        }
      }, 0);
      return;
    }

    onChange?.(event);
  };

  return (
    <div className="inputbox-container" style={{ width }}>
      {labelText && (
        <label className="inputbox-label" htmlFor={inputId}>
          {labelText}
          {required && <strong className="inputbox-required">*</strong>}
        </label>
      )}

      <div
        dir={dir}
        className={`inputbox-wrapper${disabled ? ' is-disabled' : ''}${
          error ? ' has-error' : ''
        }`}
      >
        {prefix}
        <input
          {...rest}
          ref={ref}
          id={inputId}
          className={`inputbox-input${rest.className ? ` ${rest.className} skip-bhashini-translation notranslation translateeeeee` : ''}`}
          dir="ltr"
          inputMode={isAadhaarType ? 'numeric' : rest.inputMode}
          name={name}
          type={type}
          onPaste={onPaste}
          onCut={onCut}
          onCopy={onCopy}
          value={formatDisplay(value)}
          maxLength={
            maxLength == null
              ? undefined
              : isAadhaarType
                ? maxLength + Math.floor((maxLength - 1) / 4)
                : maxLength
          }
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
        />
        {icon && (
          <button
            type="button"
            onClick={iconOnClick}
            className="inputbox-action"
            aria-label="Input action"
          >
            {icon}
          </button>
        )}
        {closeEnabled && !icon && (
          <button
            type="button"
            onClick={onClear}
            className="inputbox-action"
            aria-label="Clear input"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
      </div>

      {error && (
        <div className="inputbox-message is-error" id={errorId} role="alert">
          <span className="inputbox-error-icon" aria-hidden="true">!</span>
          <span>{error}</span>
        </div>
      )}
      {!error && success && (
        <p className="inputbox-message is-success">{success}</p>
      )}
    </div>
  );
});

export default InputBox;
