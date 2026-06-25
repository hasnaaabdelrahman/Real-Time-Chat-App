package com.demo.chat.models;

import com.demo.chat.common.MessageType;
import lombok.*;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    private String content;
    private String sender;
    private MessageType messageType;
}
