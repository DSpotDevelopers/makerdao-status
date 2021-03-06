const makerRender = ({
  forEachHeading,
}: {
  forEachHeading: (
    level: number,
    htmlCleanedText: string,
    escapedText: string,
  ) => void;
}) => ({
  heading(text: string, level: number) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

    const htmlCleanedText = text.replace(/<[^<>]+>/gm, '');

    forEachHeading(level, htmlCleanedText, escapedText);
    const labelsArray = htmlCleanedText.split(':');
    if (level === 1 && labelsArray.length === 2) {
      return renderH1({ escapedText, htmlCleanedText });
    }
    return `<div class="relative">
    <a class="absolute space-top" id="${escapedText}" href="#${escapedText}"></a>
    <h${level} class="show-link">
    <a class="link margin-left--20" href="#${escapedText}" target="_parent"><span class="hide">${svg}</span></a>${htmlCleanedText}</h${level}>
    </div>`;
  },
  table(header: string, body: string) {
    return `<div style="overflow-x:auto; margin-bottom: 16px;">
                <table style="overflow-x:auto; margin-bottom: 16px;">
                  <thead>${header}</thead>
                  <tbody>${body}</tbody>
                </table>
              </div>`;
  },
});

const svg = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.2066 5.79348C12.0737 7.66252 12.0481 10.659 10.2179 12.4994C10.2145 12.5032 10.2104 12.5072 10.2066 12.511L8.10664 14.611C6.25445 16.4632 3.24105 16.4629 1.38914 14.611C-0.463047 12.7591 -0.463047 9.74536 1.38914 7.89348L2.5487 6.73392C2.8562 6.42642 3.38577 6.6308 3.40164 7.06536C3.42189 7.61917 3.5212 8.17558 3.70445 8.71289C3.76652 8.89483 3.72217 9.09608 3.58623 9.23202L3.17727 9.64098C2.30145 10.5168 2.27398 11.9429 3.14117 12.8272C4.01692 13.7203 5.45636 13.7256 6.33883 12.8432L8.43883 10.7435C9.3198 9.86251 9.31611 8.43858 8.43883 7.5613C8.32317 7.44586 8.20667 7.35617 8.11567 7.29352C8.05129 7.24931 7.99814 7.19067 7.96045 7.12227C7.92276 7.05387 7.90157 6.97762 7.89858 6.89958C7.8862 6.56936 8.0032 6.22908 8.26414 5.96814L8.92208 5.31017C9.09461 5.13764 9.36526 5.11645 9.56533 5.25608C9.79444 5.41606 10.009 5.59589 10.2066 5.79348ZM14.6109 1.38905C12.759 -0.462891 9.74555 -0.463141 7.89336 1.38905L5.79336 3.48905C5.78961 3.4928 5.78555 3.49686 5.78211 3.50061C3.95192 5.34098 3.92627 8.33752 5.79336 10.2065C5.99095 10.4041 6.20553 10.5839 6.43464 10.7439C6.6347 10.8835 6.90539 10.8623 7.07789 10.6898L7.73583 10.0319C7.99677 9.77092 8.11376 9.43064 8.10139 9.10042C8.0984 9.02238 8.07721 8.94613 8.03952 8.87773C8.00183 8.80933 7.94867 8.75069 7.8843 8.70648C7.7933 8.64383 7.6768 8.55414 7.56114 8.4387C6.68386 7.56142 6.68017 6.13748 7.56114 5.25652L9.66114 3.15683C10.5436 2.27436 11.983 2.27967 12.8588 3.17277C13.726 4.05714 13.6985 5.4832 12.8227 6.35902L12.4137 6.76798C12.2778 6.90392 12.2335 7.10517 12.2955 7.28711C12.4788 7.82442 12.5781 8.38083 12.5983 8.93464C12.6142 9.3692 13.1438 9.57358 13.4513 9.26608L14.6108 8.10651C16.463 6.25467 16.463 3.24092 14.6109 1.38905Z" fill="black"/>
  </svg>`;

const renderH1 = ({
  escapedText,
  htmlCleanedText,
}: {
  escapedText: string;
  htmlCleanedText: string;
}) => {
  const labelsArray = htmlCleanedText.split(':');
  const container = (children: string) =>
    `<div class="container-h1 show-link">${children}</div>`;
  const label = `<span><span class="spanStyle"></span>${labelsArray[0]}:</span>`;
  const label2 = `<span ><span id="${escapedText}" /><span class="spanStyle"></span><label class="subTitleStyle">${labelsArray[1]}<label></span>`;
  return container(`${label}${label2}`);
};

export default makerRender;
