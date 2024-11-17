System.register(["./index-legacy.a7c40fe3.js"],(function(e){"use strict";var o;return{setters:[function(e){o=e.cp}],execute:function(){var r={backup:"バックアップ",restore:"復元",start_backup:"バックアップを開始",finish_backup:"バックアップが完了しました",success_backup_item:"「{{item}}」のバックアップが完了しました",failed_backup_item:"「{{item}}」のバックアップに失敗しました",no_file:"ファイルが選択されていません",start_restore:"復元を開始",finish_restore:"復元が完了しました",success_restore_item:"「{{item}}」の復元に成功しました",failed_restore_item:"「{{item}}」の復元に失敗しました",override:"上書き",encrypt_password_placeholder:"暗号化が不要な場合は空欄にしてください",encrypt_password:"暗号化のパスワード",wrong_encrypt_password:"暗号化のパスワードが間違っています"},i={"115 Cloud":{cookie:"Cookie","cookie-tips":"QRコードトークンとCookieのいずれかが必要です",limit_rate:"リミットレート","limit_rate-tips":"すべてのAPIリクエストレートを制限する([limit]r/1s)",page_size:"ページの大きさ","page_size-tips":"115ドライバのページサイズごとのAPIリスト",qrcode_source:"QRコードソース","qrcode_source-tips":"QRコードデバイスを選択します、デフォルトはLinuxです",qrcode_sources:{alipaymini:"Alipay Mini",android:"Android",ios:"iOS",qandroid:"Qandroid",tv:"テレビ",web:"Web",wechatmini:"WeChat ミニプログラム"},qrcode_token:"QRコードトークン","qrcode_token-tips":"QRコードトークンとCookieのいずれかが必要です",root_folder_id:"ルートフォルダID"},"115 Share":{cookie:"Cookie","cookie-tips":"QRコードトークンとCookieのいずれかが必要です",limit_rate:"リミットレート","limit_rate-tips":"すべてのAPIリクエストレートを制限する (1時間/[limit_rate]秒)",page_size:"ページサイズ","page_size-tips":"115ドライバのページサイズごとのAPIリスト",qrcode_source:"QRコードソース","qrcode_source-tips":"QRコードデバイスを選択します、デフォルトはLinuxです",qrcode_sources:{alipaymini:"Alipay Mini",android:"Android",ios:"iOS",qandroid:"Qandroid",tv:"テレビ",web:"Web",wechatmini:"WeChat ミニプログラム"},qrcode_token:"QRコードトークン","qrcode_token-tips":"QRコードトークンとCookieのいずれかが必要です",receive_code:"コードを受け取る","receive_code-tips":"115共有リンクのコードを受け取る",root_folder_id:"ルートフォルダID",share_code:"共有コード","share_code-tips":"115共有リンクの共有コード"},"123Pan":{password:"パスワード",root_folder_id:"ルートフォルダID",username:"ユーザー名"},"123PanLink":{origin_urls:"オリジナルのURL","origin_urls-tips":"構造:フォルダ名:\n  [ファイルサイズ:][更新日時:]URL",private_key:"プライベートキー",uid:"UID",valid_duration:"有効期限","valid_duration-tips":"分"},"123PanShare":{accesstoken:"アクセス トークン",root_folder_id:"ルートフォルダID",sharekey:"共有キー",sharepassword:"共有パスワード"},"139Yun":{authorization:"認証",cloud_id:"クラウドID",root_folder_id:"ルートフォルダID",type:"種類",types:{family:"Family",personal:"Personal",personal_new:"Personal New"}},"189Cloud":{cookie:"Cookie","cookie-tips":"Captchaが必要な場合はCookieを入力してください",password:"パスワード",root_folder_id:"ルートフォルダID",username:"ユーザー名"},"189CloudPC":{family_id:"Family ID",family_transfer:"Familyでの転送",no_use_ocr:"OCRを使用しない",order_by:"オーダー",order_bys:{filename:"ファイル名",filesize:"サイズ",lastOpTime:"最終運用時間"},order_direction:"オーダーの方向性",order_directions:{asc:"昇順",desc:"降順"},password:"パスワード",rapid_upload:"高速アップロード",root_folder_id:"ルートフォルダID",type:"種類",types:{family:"Family",personal:"Personal"},upload_method:"アップロード方式",upload_methods:{old:"古い",rapid:"高速",stream:"ストリーム"},upload_thread:"アップロードスレッド","upload_thread-tips":"1<=スレッド<=32",username:"ユーザー名",validate_code:"検証コード"},"AList V2":{access_token:"アクセストークン",password:"パスワード",root_folder_path:"ルートフォルダのパス",url:"URL"},"AList V3":{meta_password:"Metaパスワード",pass_ua_to_upsteam:"UAを上流に伝達する",password:"パスワード",root_folder_path:"ルートフォルダのパス",token:"トークン",url:"URL",username:"ユーザー名"},Alias:{paths:"パス",protect_same_name:"同じ名前を保護する","protect_same_name-tips":"同じ名前のファイルを削除または名前の変更から保護します"},Aliyundrive:{internal_upload:"内部アップロード",order_by:"オーダー",order_bys:{created_at:"作成",name:"名前",size:"サイズ",updated_at:"更新"},order_direction:"オーダーの方向性",order_directions:{ASC:"昇順",DESC:"降順"},rapid_upload:"高速アップロード",refresh_token:"トークンを更新",root_folder_id:"ルートフォルダID"},AliyundriveOpen:{client_id:"クライアントID","client_id-tips":"持っていない場合は空欄にしてください",client_secret:"クライアントシークレット","client_secret-tips":"持っていない場合は空欄にしてください",drive_type:"ドライブの種類",drive_types:{backup:"バックアップ",default:"デフォルト",resource:"リソース"},internal_upload:"内部アップロード","internal_upload-tips":"Aliyun ECSが北京にある場合、アップロード速度を上げるためにオンにすることができます",livp_download_format:"Livpダウンロードフォーマット",livp_download_formats:{jpeg:"JPEG",mov:"MOV"},oauth_token_url:"OAuthトークンURL",order_by:"オーダー",order_bys:{created_at:"作成",name:"名前",size:"サイズ",updated_at:"更新"},order_direction:"オーダーの方向性",order_directions:{ASC:"昇順",DESC:"降順"},rapid_upload:"高速アップロード","rapid_upload-tips":"このオプションを有効化すると、ファイルが最初にサーバー上にアップロードされるため進捗状況が不正確になります",refresh_token:"トークンを更新",remove_way:"削除方法",remove_ways:{delete:"削除",trash:"ごみ箱"},root_folder_id:"ルートフォルダID"},AliyundriveShare:{order_by:"オーダー",order_bys:{created_at:"作成",name:"名前",size:"サイズ",updated_at:"更新"},order_direction:"オーダーの方向性",order_directions:{ASC:"昇順",DESC:"降順"},refresh_token:"トークンを更新",root_folder_id:"ルートフォルダID",share_id:"共有ID",share_pwd:"共有パスワード"},BaiduNetdisk:{client_id:"クライアントID",client_secret:"クライアントシークレット",custom_crack_ua:"カスタムクラックUA",custom_upload_part_size:"アップロードチャンクサイズのカスタマイズ","custom_upload_part_size-tips":"0はVIPレベルに応じたサイズを示します",download_api:"ダウンロードAPI",download_apis:{crack:"クラック",official:"公式"},order_by:"オーダー",order_bys:{name:"名前",size:"サイズ",time:"時刻"},order_direction:"オーダーの方向性",order_directions:{asc:"昇順",desc:"降順"},refresh_token:"トークンを更新",root_folder_path:"ルートフォルダのパス",upload_api:"アップロードAPI",upload_thread:"アップロードスレッド","upload_thread-tips":"1<=スレッド<=32"},BaiduPhoto:{album_id:"アルバムID",client_id:"クライアントID",client_secret:"クライアントシークレット",delete_origin:"オリジナルを削除",refresh_token:"トークンを更新",show_type:"種類を表示",show_types:{root:"ルート",root_only_album:"ルートのみのアルバム",root_only_file:"ルートのみのファイル"},upload_thread:"アップロードスレッド","upload_thread-tips":"1<=スレッド<=32"},BaiduShare:{BDUSS:"BDUSS",pwd:"パスワード",root_folder_path:"ルートフォルダのパス",surl:"SURL"},ChaoXingGroupDrive:{bbsid:"BBSID",cookie:"Cookie",password:"パスワード",root_folder_id:"ルートフォルダID",user_name:"ユーザー名"},Cloudreve:{address:"アドレス",cookie:"Cookie",custom_ua:"カスタムUA",enable_thumb_and_folder_size:"サムネイルとフォルダのサイズを有効化する",password:"パスワード",root_folder_path:"ルートフォルダのパス",username:"ユーザー名"},Crypt:{directory_name_encryption:"ディレクトリ名の暗号化",directory_name_encryptions:{false:"False",true:"True"},encrypted_suffix:"暗号化された接尾辞","encrypted_suffix-tips":"上級者向けです! 暗号化されたファイルにはこの接尾辞が付きます",filename_encoding:"ファイル名のエンコーディング","filename_encoding-tips":"上級者向けです!",filename_encodings:{base32:"Base32",base32768:"Base32768",base64:"Base64"},filename_encryption:"ファイル名の暗号化",filename_encryptions:{obfuscate:"難読化",off:"オフ",standard:"標準"},password:"パスワード","password-tips":"メインパスワード",remote_path:"リモートパス","remote_path-tips":"ここに暗号化されたデータが保存されます",salt:"Salt","salt-tips":"Saltがよくわからない場合は、2番目のパスワードとして扱ってください。これは任意ですが、推奨します",show_hidden:"隠しディレクトリとファイルを表示","show_hidden-tips":"隠しディレクトリと隠しファイルを表示します",thumbnail:"サムネイル","thumbnail-tips":".thumbnailsフォルダの下にあらかじめ生成されたサムネイルを有効化する"},Doge:{access_key_id:"アクセスキーID",add_filename_to_disposition:"ファイル名を処分に追加","add_filename_to_disposition-tips":"Content-Dispositionヘッダーにファイル名を追加します",bucket:"バケット",custom_host:"カスタムホスト",endpoint:"エンドポイント",force_path_style:"強制パスのスタイル",list_object_version:"リストオブジェクトのバージョン",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"プレースホルダー",region:"国",remove_bucket:"バケットを削除","remove_bucket-tips":"カスタムホストを使用する場合、パスからバケット名を削除します",root_folder_path:"ルートフォルダのパス",secret_access_key:"シークレットアクセスキー",session_token:"セッショントークン",sign_url_expire:"サインURLは期限切れです"},Dropbox:{client_id:"クライアントID","client_id-tips":"持っていない場合は空欄にしてください",client_secret:"クライアントシークレット","client_secret-tips":"持っていない場合は空欄にしてください",oauth_token_url:"OAuthトークンURL",refresh_token:"トークンを更新",root_folder_path:"ルートフォルダのパス"},FTP:{address:"アドレス",encoding:"エンコーディング",password:"パスワード",root_folder_path:"ルートフォルダのパス",username:"ユーザー名"},FebBox:{client_id:"クライアントID",client_secret:"クライアントシークレット",page_size:"ページの大きさ","page_size-tips":"FebBoxドライバをページサイズごとのAPIを一覧にします",root_folder_id:"ルートフォルダID",sort_rule:"ソートのルール",sort_rules:{ext_asc:"拡張子の昇順",ext_desc:"拡張子の降順",name_asc:"名前 (昇順)",name_desc:"名前 (降順)",size_asc:"サイズ (昇順)",size_desc:"サイズ (降順)",update_asc:"更新昇順",update_desc:"更新の降順"},user_ip:"ユーザーIP","user_ip-tips":"ダウンロードを高速化するダウンロードリンクのユーザーIPアドレスです"},FeijiPan:{password:"パスワード",root_folder_id:"ルートフォルダのパス",username:"ユーザー名"},GoogleDrive:{chunk_size:"チャンクサイズ","chunk_size-tips":"アップロード時のチャンクサイズ (単位: MB)",client_id:"クライアントID",client_secret:"クライアントシークレット",order_by:"オーダー","order_by-tips":"例: フォルダ、名前、更新日時",order_direction:"オーダーの方向性",order_directions:{asc:"昇順",desc:"降順"},refresh_token:"トークンを更新",root_folder_id:"ルートフォルダID"},GooglePhoto:{client_id:"クライアントID",client_secret:"クライアントシークレット",refresh_token:"トークンを更新",root_folder_id:"ルートフォルダID",show_archive:"アーカイブを表示"},HalalCloud:{app_id:"アプリID",app_secret:"アプリシークレット",app_version:"アプリのバージョン",refresh_token:"トークンを更新","refresh_token-tips":"ログインの種類がトークンを更新の場合は必須です",root_folder_path:"ルートフォルダのパス",upload_thread:"アップロードスレッド","upload_thread-tips":"1 <= スレッド <= 32"},ILanZou:{password:"パスワード",root_folder_id:"ルートフォルダID",username:"ユーザー名"},"IPFS API":{endpoint:"エンドポイント",gateway:"ゲートウェイ",root_folder_path:"ルートフォルダのパス"},KodBox:{address:"アドレス",password:"パスワード",root_folder_path:"ルートフォルダのパス",username:"ユーザー名"},Lanzou:{account:"アカウント",baseUrl:"ベースURL","baseUrl-tips":"ファイル操作の基本URLです",cookie:"Cookie","cookie-tips":"約15日間有効、共有URLが使用されている場合は無視されます",password:"パスワード",repair_file_info:"ファイル情報を修復","repair_file_info-tips":"WebDAVを使用するには有効化する必要があります",root_folder_id:"ルートフォルダID",shareUrl:"共有URL","shareUrl-tips":"共有ページの取得に使用します",share_password:"共有パスワード",type:"種類",types:{account:"アカウント",cookie:"Cookie",url:"URL"},user_agent:"User Agent"},Lark:{app_id:"アプリID","app_id-tips":"アプリID",app_secret:"アプリシークレット","app_secret-tips":"アプリシークレット",external_mode:"外部モード","external_mode-tips":"外部モード",root_folder_path:"ルートフォルダのパス",tenant_url_prefix:"テナントURLの接頭辞","tenant_url_prefix-tips":"テナントURLの接頭辞"},LenovoNasShare:{host:"ホスト","host-tips":"ローカルエリアネットワークに変更ができます",root_folder_path:"ルートフォルダのパス",share_id:"共有ID","share_id-tips":"共有リンク内の / (スラッシュ) の後の部分",share_pwd:"共有パスワード","share_pwd-tips":"共有リンクのパスワード"},Local:{mkdir_perm:"Mkdir perm",recycle_bin_path:"ごみ箱のパス","recycle_bin_path-tips":"ごみ箱のパス、空欄の場合は完全に削除になります",root_folder_path:"ルートフォルダのパス",show_hidden:"隠しディレクトリとファイルを表示","show_hidden-tips":"隠しディレクトリとファイルを表示します",thumb_cache_folder:"サムネイルキャッシュフォルダ",thumb_concurrency:"サムネイル作成を同時実行","thumb_concurrency-tips":"同時サムネイル生成で使用するGoroutineの数です。これで、平行して生成するサムネイルの数を制御します。",thumbnail:"サムネイル","thumbnail-tips":"サムネイルを有効化"},MediaTrack:{access_token:"アクセストークン",order_by:"オーダー",order_bys:{size:"サイズ",title:"タイトル",updated_at:"更新"},order_desc:"オーダーの内容",project_id:"プロジェクトID",root_folder_id:"ルートフォルダID"},Mega_nz:{email:"メールアドレス",password:"パスワード",two_fa_code:"2FAコード","two_fa_code-tips":"2FAの6桁のコードです、2FAコードのみを入力するとドライバの再読み込みはサポートされません",two_fa_secret:"2FAシークレット","two_fa_secret-tips":"2FAシークレット"},MoPan:{cloud_id:"クラウドID",device_info:"デバイス情報",order_by:"オーダー",order_bys:{filename:"ファイル名",filesize:"ファイルサイズ",lastOpTime:"最終運用時間"},order_direction:"オーダーの方向性",order_directions:{asc:"昇順",desc:"降順"},password:"パスワード",phone:"電話番号",root_folder_id:"ルートフォルダID",sms_code:"SMSコード","sms_code-tips":"「send」を入力でSMSを送信",upload_thread:"アップロードスレッド","upload_thread-tips":"1<=スレッド<=32"},NeteaseMusic:{cookie:"Cookie",song_limit:"曲の取得上限","song_limit-tips":"デフォルトでは200曲のみ取得"},Onedrive:{chunk_size:"チャンクサイズ",client_id:"クライアントID",client_secret:"クライアントシークレット",custom_host:"カスタムホスト","custom_host-tips":"OneDriveダウンロードリンクのカスタムホスト",is_sharepoint:"SharePoint",redirect_uri:"リダイレクトURI",refresh_token:"トークンを更新",region:"国",regions:{cn:"中国",de:"ドイツ",global:"グローバル",us:"アメリカ"},root_folder_path:"ルートフォルダのパス",site_id:"サイトID"},"Onedrive Sharelink":{password:"パスワード",root_folder_path:"ルートフォルダのパス",url:"URL"},OnedriveAPP:{chunk_size:"チャンクサイズ",client_id:"クライアントID",client_secret:"クライアントシークレット",custom_host:"カスタムホスト","custom_host-tips":"OneDriveダウンロードリンクのカスタムホストです",email:"メール",region:"国",regions:{cn:"中国",de:"ドイツ",global:"グローバル",us:"アメリカ"},root_folder_path:"ルートフォルダのパス",tenant_id:"Tenant ID"},PikPak:{captcha_token:"Captchaトークン",custom_low_latency_address:"カスタム低遅延アドレス",device_id:"デバイスID",disable_media_link:"メディアリンクを無効化",password:"パスワード",platform:"プラットフォーム",platforms:{android:"Android",pc:"PC",web:"Web"},refresh_token:"トークンを更新",refresh_token_method:"トークン方式を更新",refresh_token_methods:{http:"http",oauth2:"OAuth 2.0"},root_folder_id:"ルートフォルダID",use_low_latency_address:"低遅延アドレスを使用する",username:"ユーザー名"},PikPakShare:{custom_low_latency_address:"カスタム低遅延アドレス",device_id:"デバイスID",platform:"プラットフォーム",platforms:{android:"Android",pc:"PC",web:"Web"},root_folder_id:"ルートフォルダID",share_id:"共有ID",share_pwd:"共有パスワード",use_low_latency_address:"低遅延アドレスを使用する",use_transcoding_address:"トランスコーディングアドレスを使用する"},Quark:{cookie:"Cookie",order_by:"オーダー",order_bys:{file_name:"ファイル名",file_type:"ファイルの種類",none:"なし",updated_at:"更新"},order_direction:"オーダーの方向性",order_directions:{asc:"昇順",desc:"降順"},root_folder_id:"ルートフォルダID"},QuarkTV:{device_id:"デバイスID",query_token:"クエリトークン","query_token-tips":"編集しない",refresh_token:"トークンを更新",root_folder_id:"ルートフォルダID"},Quqi:{cdn:"CDN","cdn-tips":"このオプションを有効化するとダウンロード速度が向上しますが、パフォーマンスが低下します",cookie:"Cookie","cookie-tips":"Cookieは複数のクライアントで同時に使用可能です",password:"パスワード",phone:"電話番号",root_folder_id:"ルートフォルダID"},S3:{access_key_id:"アクセスキーID",add_filename_to_disposition:"ファイル名を処分に追加","add_filename_to_disposition-tips":"Content-Dispositionヘッダーにファイル名を追加します",bucket:"バケット",custom_host:"カスタムホスト",endpoint:"エンドポイント",force_path_style:"強制パスのスタイル",list_object_version:"リストオブジェクトのバージョン",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"プレースホルダー",region:"国",remove_bucket:"バケットを削除","remove_bucket-tips":"カスタムホストを使用する場合、パスからバケット名を削除します",root_folder_path:"ルートフォルダのパス",secret_access_key:"シークレットアクセスキー",session_token:"セッショントークン",sign_url_expire:"署名URLの有効期限"},SFTP:{address:"アドレス",ignore_symlink_error:"シンボリックリンクのエラーを無視",passphrase:"パスフレーズ",password:"パスワード",private_key:"プライベートキー",root_folder_path:"ルートフォルダのパス",username:"ユーザー名"},SMB:{address:"アドレス",password:"パスワード",root_folder_path:"ルートフォルダのパス",share_name:"共有名",username:"ユーザー名"},Seafile:{address:"アドレス",password:"パスワード",repoId:"リポジトリID",repoPwd:"リポジトリのパスワード",root_folder_path:"ルートフォルダのパス",token:"トークン",username:"ユーザー名"},Teambition:{cookie:"Cookie",order_by:"オーダー",order_bys:{created:"作成",fileName:"ファイル名",fileSize:"ファイルサイズ",updated:"更新"},order_direction:"オーダーの方向性",order_directions:{Asc:"昇順",Desc:"降順"},project_id:"プロジェクトID",region:"国",regions:{china:"中国",international:"国際"},root_folder_id:"ルートフォルダID",use_s3_upload_method:"S3アップロード方式を使用する"},Terabox:{cookie:"Cookie",download_api:"ダウンロードAPI",download_apis:{crack:"クラック",official:"公式"},order_by:"オーダー",order_bys:{name:"名前",size:"サイズ",time:"時刻"},order_direction:"オーダーの方向性",order_directions:{asc:"昇順",desc:"降順"},root_folder_path:"ルートフォルダのパス"},Thunder:{captcha_token:"Captchaトークン",password:"パスワード",root_folder_id:"ルートフォルダID",username:"ユーザー名"},ThunderBrowser:{captcha_token:"Captchaトークン",password:"パスワード",remove_way:"削除方法",remove_ways:{delete:"削除",trash:"ごみ箱"},root_folder_id:"ルートフォルダID",safe_password:"安全なパスワード",use_video_url:"ビデオURLを使用する",username:"ユーザー名"},ThunderBrowserExpert:{algorithms:"アルゴリズム","algorithms-tips":"サインの種類がアルゴリズムである場合は必須です",captcha_sign:"Captchaのサイン","captcha_sign-tips":"サインの種類がCaptchaサインの場合は必須です",captcha_token:"Captchaトークン",client_id:"クライアントID",client_secret:"クライアントシークレット",client_version:"クライアントのバージョン",device_id:"デバイスID",download_user_agent:"User Agentをダウンロード",login_type:"ログインの種類",login_types:{refresh_token:"トークンを更新",user:"ユーザー"},package_name:"パッケージ名",password:"パスワード","password-tips":"ログインの種類がユーザーである事が必須です",refresh_token:"トークンを更新","refresh_token-tips":"ログインの種類がトークンを更新の場合は必須です",remove_way:"削除方法",remove_ways:{delete:"削除",trash:"ごみ箱"},root_folder_id:"ルートフォルダID",safe_password:"安全なパスワード","safe_password-tips":"超安全なパスワード",sign_type:"サインの種類",sign_types:{algorithms:"アルゴリズム",captcha_sign:"Captchaのサイン"},timestamp:"タイムスタンプ","timestamp-tips":"サインの種類がCaptchaサインの場合は必須です",use_video_url:"ビデオURLを使用する",user_agent:"User Agent",username:"ユーザー名","username-tips":"ログインの種類がユーザーである事が必須です"},ThunderExpert:{algorithms:"アルゴリズム","algorithms-tips":"サインの種類がアルゴリズムである場合は必須です",captcha_sign:"Captchaのサイン","captcha_sign-tips":"サインの種類がCaptchaである場合は必須です",captcha_token:"Captchaトークン",client_id:"クライアントID",client_secret:"クライアントシークレット",client_version:"クライアントのバージョン",device_id:"デバイスID",download_user_agent:"User Agentをダウンロード",login_type:"ログインの種類",login_types:{refresh_token:"トークンを更新",user:"ユーザー"},package_name:"パッケージ名",password:"パスワード","password-tips":"ログインの種類がユーザーである事が必須です",refresh_token:"トークンを更新","refresh_token-tips":"ログインの種類がトークンを更新の場合は必須です",root_folder_id:"ルートフォルダID",sign_type:"サインの種類",sign_types:{algorithms:"アルゴリズム",captcha_sign:"Captchaの署名"},timestamp:"タイムスタンプ","timestamp-tips":"サインの種類がCaptchaサインの場合は必須です",use_video_url:"ビデオURLを使用する",user_agent:"User Agent",username:"ユーザー名","username-tips":"ログインの種類がユーザーである事が必須です"},ThunderX:{captcha_token:"Captchaトークン",password:"パスワード",root_folder_id:"ルートフォルダID",use_video_url:"ビデオURLを使用する",username:"ユーザー名"},ThunderXExpert:{algorithms:"アルゴリズム","algorithms-tips":"サインの種類がアルゴリズムである場合は必須です",captcha_sign:"Captchaのサイン","captcha_sign-tips":"サインの種類がCaptchaサインの場合は必須です",captcha_token:"Captchaトークン",client_id:"クライアントID",client_secret:"クライアントシークレット",client_version:"クライアントのバージョン",device_id:"デバイスID",download_user_agent:"User Agentをダウンロード",login_type:"ログインの種類",login_types:{refresh_token:"トークンを更新",user:"ユーザー"},package_name:"パッケージ名",password:"パスワード","password-tips":"ログインの種類がユーザーである事が必須です",refresh_token:"トークンを更新","refresh_token-tips":"ログインの種類がトークンを更新の場合は必須です",root_folder_id:"ルートフォルダID",sign_type:"サインの種類",sign_types:{algorithms:"アルゴリズム",captcha_sign:"Captchaのサイン"},timestamp:"タイムスタンプ","timestamp-tips":"サインの種類がCaptchaサインの場合は必須です",use_video_url:"ビデオURLを使用する",user_agent:"User Agent",username:"ユーザー名","username-tips":"ログインの種類がユーザーである事が必須です"},Trainbit:{AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"APIキー",root_folder_id:"ルートフォルダID"},UC:{cookie:"Cookie",order_by:"オーダー",order_bys:{file_name:"ファイル名",file_type:"ファイルの種類",none:"なし",updated_at:"更新"},order_direction:"オーダーの方向性",order_directions:{asc:"昇順",desc:"降順"},root_folder_id:"ルートフォルダID"},UCTV:{device_id:"デバイスID",query_token:"クエリトークン","query_token-tips":"編集しない",refresh_token:"トークンを更新",root_folder_id:"ルートフォルダID"},USS:{anti_theft_chain_token:"アンチセフトチェーントークン",bucket:"バケット",endpoint:"エンドポイント",operator_name:"オペレーター名",operator_password:"オペレーターのパスワード",root_folder_path:"ルートフォルダのパス",sign_url_expire:"サインURLは期限切れです"},UrlTree:{head_size:"Headのサイズ","head_size-tips":"ファイルサイズを取得するためにHeadメソッドを使用しますが、失敗する可能性があります",url_structure:"URLの構造","url_structure-tips":"構造:フォルダ名:\n  [ファイル名:][ファイルサイズ:][最終更新:]URL"},VTencent:{cookie:"Cookie",order_by:"オーダー",order_bys:{CreatTime:"作成日時",Name:"名前",Size:"サイズ",UpdateTime:"更新日時"},order_direction:"オーダーの方向性",order_directions:{Asc:"昇順",Desc:"降順"},root_folder_id:"ルートフォルダID",tf_uid:"TF UID"},Virtual:{max_file_size:"最大のファイルサイズ",min_file_size:"最小のファイルサイズ",num_file:"ファイル数",num_folder:"フォルダ数",root_folder_path:"ルートフォルダのパス"},WebDav:{address:"アドレス",password:"パスワード",root_folder_path:"ルートフォルダのパス",tls_insecure_skip_verify:"TLSの安全でないスキップ認証",username:"ユーザー名",vendor:"ベンダー",vendors:{other:"その他",sharepoint:"共有ポイント"}},WeiYun:{cookies:"Cookies",order_by:"オーダー",order_bys:{name:"名前",size:"サイズ",updated_at:"更新"},order_direction:"オーダーの方向性",order_directions:{asc:"昇順",desc:"降順"},root_folder_id:"ルートフォルダID",upload_thread:"アップロードスレッド","upload_thread-tips":"4<=スレッド<=32"},WoPan:{access_token:"アクセストークン",family_id:"Family ID","family_id-tips":"個人用ドライブ使用する場合は空欄のままにしてください",refresh_token:"トークンを更新",root_folder_id:"ルートフォルダID",sort_rule:"ソートのルール",sort_rules:{name_asc:"名前 (昇順)",name_desc:"名前 (降順)",size_asc:"サイズ (昇順)",size_desc:"サイズ (降順)",time_asc:"時刻 (昇順)",time_desc:"時刻 (降順)"}},YandexDisk:{client_id:"クライアントID",client_secret:"クライアントシークレット",order_by:"オーダー",order_bys:{created:"作成",modified:"最終更新",name:"名前",path:"パス",size:"サイズ"},order_direction:"オーダーの方向性",order_directions:{asc:"昇順",desc:"降順"},refresh_token:"トークンを更新",root_folder_path:"ルートフォルダのパス"},config:{"115 Cloud":{},"115 Share":{},"123Pan":{},"123PanLink":{},"123PanShare":{},"139Yun":{},"189Cloud":{alert:"このドライバが動作しない場合は、189PCドライバをお試しください"},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:"このドライバには無限ループが発生するバグがあるかもしれません。\n非推奨であり、メンテナンスも終了しています。将来のバージョンで削除される予定です。\n公式ドライバの「AliyundriveOpen」の使用をおすすめします"},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},ChaoXingGroupDrive:{},Cloudreve:{},Crypt:{},Doge:{},Dropbox:{},FTP:{},FebBox:{},FeijiPan:{},GoogleDrive:{},GooglePhoto:{},HalalCloud:{},ILanZou:{},"IPFS API":{},KodBox:{},Lanzou:{},Lark:{},LenovoNasShare:{},Local:{},MediaTrack:{},Mega_nz:{},MoPan:{alert:"このネットワークディスクには、パスワードが平文で保存される場合があります。パスワードは慎重に設定してください"},NeteaseMusic:{},Onedrive:{},"Onedrive Sharelink":{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},QuarkTV:{},Quqi:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderBrowser:{},ThunderBrowserExpert:{},ThunderExpert:{},ThunderX:{},ThunderXExpert:{},Trainbit:{},UC:{},UCTV:{},USS:{},UrlTree:{},VTencent:{},Virtual:{},WebDav:{},WeiYun:{},WoPan:{},YandexDisk:{}},drivers:{"115 Cloud":"115 Cloud","115 Share":"115 Share","123Pan":"123Pan","123PanLink":"123PanLink","123PanShare":"123PanShare","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetDisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",ChaoXingGroupDrive:"ChaoXingGroupDrive",Cloudreve:"Cloudreve",Crypt:"Crypt",Doge:"Doge",Dropbox:"Dropbox",FTP:"FTP",FebBox:"FebBox",FeijiPan:"FeijiPan",GoogleDrive:"Googleドライブ",GooglePhoto:"Googleフォト",HalalCloud:"HalalCloud",ILanZou:"ILanZou","IPFS API":"IPFS API",KodBox:"KodBox",Lanzou:"Lanzou",Lark:"Lark",LenovoNasShare:"LenovoNasShare",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",MoPan:"MoPan",NeteaseMusic:"NetEase Cloud Music",Onedrive:"OneDrive","Onedrive Sharelink":"OneDrive共有リンク",OnedriveAPP:"OneDriveアプリ",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",QuarkTV:"QuarkTV",Quqi:"Quqi",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderBrowser:"ThunderBrowser",ThunderBrowserExpert:"ThunderBrowserExpert",ThunderExpert:"ThunderExpert",ThunderX:"ThunderX",ThunderXExpert:"ThunderXExpert",Trainbit:"Trainbit",UC:"UC",UCTV:"UCTV",USS:"USS",UrlTree:"UrlTree",VTencent:"VTencent",Virtual:"Virtual",WebDav:"WebDAV",WeiYun:"WeiYun",WoPan:"WoPan",YandexDisk:"YandexDisk"}},a={refresh:"更新",add:"追加",edit:"編集",delete:"削除",save:"保存",update:"アップデート",copied:"コピーしました",delete_success:"削除が成功しました",save_success:"保存が成功しました",update_success:"アップロードが成功しました",choose:"選択",confirm:"確認",cancel:"キャンセル",delete_confirm:"本当に「{{name}}」を削除しますか?",operations:"操作",yes:"はい",no:"いいえ",clear:"クリア",choose_folder:"フォルダを選択",choose_or_input_path:"フォルダまたは入力先のパスを選択",disable:"無効",enable:"有効",ok:"OK",back:"戻る",have_account:"アカウントをお持ちですか?",go_login:"ログインする",close:"閉じる",no_support_now:"現在サポートされていません",empty_input:"入力してください",name:"名前"},t={obj:{name:"名前",size:"サイズ",modified:"最終更新"},preview:{download:"ダウンロード",failed_load_img:"画像の読み込みに失敗しました",open_with:"開く...",play_with:"再生...",install:"インストール",installing:"インストール中","tr-install":"TrollStore","tr-installing":"TrollStoreをインストール中",open_in_new_window:"新しいウィンドウで開く",auto_next:"自動で次へ"},layouts:{list:"リストビュー",grid:"グリッドビュー",image:"イメージビュー"},no_images:"現在のフォルダに画像がありません",load_more:"さらに読み込む",no_more:"これ以上はありません",input_password:"パスワードを入力してください",toolbar:{more:"詳細",refresh:"更新",toggle_theme:"テーマを切り替え",switch_lang:"言語を切り替え",toggle_markdown_toc:"アウトラインに切り替え",toggle_checkbox:"チェックボックスに切り替え",rename:"名前を変更",input_new_name:"新しい名前を入力","only_one-tips":"名前を変更できるオブジェクトは1つのみです",move:"移動",copy:"コピー",choose_dst_folder:"保存先フォルダの選択",delete:"削除","delete-tips":"選択したオブジェクトを削除してもよろしいですか?",copy_link:"リンクをコピー",preview_page:"前のページ",down_link:"ダウンロードリンク",encode_down_link:"ダウンロードリンクをエンコード",mkdir:"新規フォルダ",input_dir_name:"フォルダ名を入力",new_file:"新規ファイル",input_filename:"ファイル名を入力",cancel_select:"選択をキャンセル",offline_download:"オフラインダウンロード","offline_download-tips":"1行に1つのURL",delete_policy:{delete_on_upload_succeed:"アップロードの成功時に削除する",delete_on_upload_failed:"アップロード時の削除に失敗しました",delete_never:"削除しない",delete_always:"常に削除する"},download:"ダウンロード",batch_download:"一括ダウンロード",package_download:"パッケージをダウンロード",package_download_disabled:"パッケージのダウンロードは無効化されています",send_aria2:"Aria2に送信",aria2_not_set:"Aria2 RPC URLを設定してください",send_aria2_success:"Aria2への送信が成功しました","pre_package_download-tips":"パッケージのダウンロードにサーバーではなく、ブラウザでストリームサーバーを使用するには対応するストレージがCORSをサポートしている必要があります。サポートされていないストレージでは失敗します","package_download-tips":"ダウンロード中です。ページを閉じないでお待ちください",playlist_download:"プレイリストダウンロード",upload:"アップロード",local_settings:"ローカルの設定",recursive_move:"再帰的な移動","recursive_move_directory-tips":"現在のフォルダとそのフォルダ内のすべてのファイルを指定したフォルダに移動してよろしいですか?",remove_empty_directory:"空のフォルダを削除","remove_empty_directory-tips":"空のサブフォルダをすべて削除しましたか?",batch_rename:"一括でリネーム",regex_rename:"Regexをリネーム",sequential_renaming:"連続リネーム",regex_rename_preview:"変更されたファイル",regex_rename_preview_old_name:"古い名前",regex_rename_preview_new_name:"新しい名前",regular_rename:"正規表現によるファイル名の変更は、1行目にソースファイル名の正規表現を入力し、2行目に新しいファイル名の正規表現を入力してください",sequential_renaming_desc:"新しいファイル名には数値の開始値が付加されます。開始値に1を加えて順に表示されます。1行目に新しいファイル名を入力し、2行目に開始値を入力します"},upload:{add_as_task:"タスクに追加","upload-tips":"ファイルをドラッグしてアップロード:",release:"リリースしてアップロード",no_files_drag:"ファイルはドラッグされていません",upload_files:"ファイルを選択",upload_folder:"フォルダを選択",pending:"保留中",uploading:"アップロード中",backending:"バックエンドでのアップロード",success:"成功",error:"エラー",back:"アップロードに戻る",clear_done:"クリアが完了しました"},local_settings:{aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC シークレット",aria2_dir:"Aria2 ダウンロードディレクトリ",show_folder_in_image_view:"画像ビューにフォルダを表示",show_folder_in_image_view_options:{top:"上部",bottom:"下部",none:"なし"},global_default_layout:"グローバルデフォルトレイアウト",global_default_layout_options:{list:"リストビュー",grid:"グリッドビュー",image:"イメージビュー"},position_of_header_navbar:"ヘッダーとナビバーの位置",position_of_header_navbar_options:{static:"ノーマル",sticky:"ページの先頭に固定",only_navbar_sticky:"ナビバーのみ固定"},show_sidebar:"サイドバーを表示",show_sidebar_options:{none:"なし",visible:"可視"},list_item_filename_overflow:"リスト項目ファイル名のオーバーフロー",list_item_filename_overflow_options:{ellipsis:"省略記号",scrollable:"スクロール可能",multi_line:"マルチライン"},open_item_on_checkbox:"チェックボックスの項目を開く",open_item_on_checkbox_options:{direct:"直接",disable_while_checked:"チェック中は無効化する",with_ctrl:"Ctrl/Commandを押しながら",with_alt:"Alt/Optionを押しながら"},select_with_mouse:"チェックボックスを閉じた状態でマウスで項目を選択",select_with_mouse_options:{disabled:"無効",open_item_with_dblclick:"ダブルクリックでアイテムを開く"}},package_download:{current_status:"現在の状態",initializing:"初期化中",fetching_struct:"フォルダ構造の取得",fetching_struct_failed:"フォルダ構造の取得に失敗しました",downloading:"ファイルをダウンロード中です。ページを閉じたり更新をしないでください",failed:"パッケージのダウンロードに失敗しました",success:"ダウンロードが完了しました"},footer:{powered_by:"Powered by AList",manage:"管理"},search:{search:"検索",no_result:"結果はありません",scopes:{all:"すべて",folder:"フォルダ",file:"ファイル"}},fetching_settings_failed:"設定の取得に失敗:",get_current_user_failed:"現在のユーザーの取得に失敗:","Loading storage, please wait":"ストレージを読み込み中です、しばらくお待ちください"},s={search_index:"インデックスを検索",current:"現在のインデックス",build:"インデックスをビルド",rebuild:"インデックスをリビルド",paths_to_update:"アップデートのパス",max_depth:"最大の深さ",update:"インデックスを更新",obj_count:"オブジェクト数",last_done_time:"最終完了日時",unknown:"不明",stop:"停止",clear:"クリア",error:"エラー"},_={login_to:"ログイン:","username-tips":"ユーザー名を入力","password-tips":"パスワードを入力","otp-tips":"OTPコードを入力",remember:"常にログインする",forget:"パスワードを忘れましたか?",forget_url:"https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",clear:"クリア",login:"ログイン",use_guest:"ゲストとして閲覧",success:"ログインに成功しました"},d={sidemenu:{dashboard:"ダッシュボード",settings:"設定",site:"サイト",style:"スタイル",preview:"プレビュー",global:"グローバル",other:"その他",users:"ユーザー",storages:"ストレージ",metas:"Meta",profile:"プロフィール",about:"バージョン情報",tasks:"タスク",upload:"アップロード",copy:"コピー","backup-restore":"バックアップと復元",home:"ホーム",indexes:"インデックス",sso:"シングルサインオン",docs:"ドキュメント",offline_download:"オフラインダウンロード",ldap:"LDAP",s3:"S3"},title:"AListの管理",not_admin:"管理者アカウントでログインしてください。",logout_success:"ログアウトに成功しました",send:"送信",receive:"受信",received_msgs:"メッセージを受信しました","add_storage-tips":"新しく開いたタブにいくつかの情報を入力する必要があるかもしれません。","messenger-tips":"プロンプトが表示された場合は、このタブでいくつかの情報を入力する必要があります。"},n={path:"パス",password:"パスワード",write:"書き込み",hide:"非表示",readme:"お読みください",readme_help:"下部にマークダウンを表示してコンテンツやリンクをサポートします",header:"ヘッダー",header_help:"上部にマークダウンを表示してコンテンツやリンクをサポートします",apply_sub:"サブフォルダに適用",hide_help:"1行につき1つの正規表現です"},l={allow_indexed:"インデックスを許可",allow_mounted:"マウントを許可",announcement:"お知らせ",aria2_secret:"Aria2シークレット",aria2_uri:"Aria2 URI",audio_autoplay:"オーディオを自動再生",audio_cover:"オーディオのカバー画像",audio_types:"オーディオの種類",auto_update_index:"インデックスを自動更新",customize_body:"bodyをカスタマイズ",customize_head:"headをカスタマイズ",default_page_size:"デフォルトページのサイズ",external_previews:"外部プレビュー",favicon:"Favicon",filename_char_mapping:"ファイル名の文字マッピング",forward_direct_link_params:"直接リンクのパラメータを転送",hide_files:"ファイルを隠す",home_container:"ホームコンテナ",home_containers:{hope_container:"ホープコンテナ",max_980px:"最大980px"},home_icon:"ホームアイコン",iframe_previews:"Iframeプレビュー",ignore_direct_link_params:"直接リンクのパラメータを無視",ignore_paths:"パスを無視","ignore_paths-tips":"1行につき1つのパスです",image_types:"画像の種類",index_progress:"インデックスの進捗",ldap_default_dir:"Ldapのデフォルトディレクトリ",ldap_default_permission:"Ldapのデフォルト権限",ldap_login_enabled:"Ldapのログインを有効化",ldap_login_tips:"Ldapのログインのヒント",ldap_manager_dn:"Ldapの管理dn",ldap_manager_password:"Ldapの管理パスワード",ldap_server:"Ldapサーバー",ldap_user_search_base:"Ldapユーザー検索ベース",ldap_user_search_filter:"Ldapユーザー検索フィルター",link_expiration:"リンクが期限切れです",logo:"ロゴ",main_color:"メインカラー",max_index_depth:"最大インデックス深度","max_index_depth-tips":"インデックスの最大深度です",ocr_api:"OCR API",package_download:"パッケージをダウンロード",pagination_type:"ページネーションの種類",pagination_types:{all:"すべて",auto_load_more:"自動で更に読み込み",load_more:"更に読み込む",pagination:"ページネーション"},privacy_regs:"プライバシーの規制",proxy_ignore_headers:"プロキシではヘッダーを無視",proxy_types:"プロキシの種類",qbittorrent_seedtime:"qBittorrentシード時間",qbittorrent_url:"QBittorrent URL",robots_txt:"Robots.txt",s3_access_key_id:"S3アクセスキーID",s3_buckets:"S3バケット",s3_secret_access_key:"S3シークレットアクセスキー",search_index:"検索インデックス",search_indexs:{bleve:"Bleve",database:"データベース",database_non_full_text:"全文なしのデータベース",meilisearch:"Meilisearch",none:"なし"},settings_layout:"設定のレイアウト",settings_layouts:{list:"一覧",responsive:"レスポンシブ"},sign_all:"すべてサイン",site_title:"サイトのタイトル",sso_application_name:"SSOアプリケーション名",sso_auto_register:"SSO自動登録",sso_client_id:"SSOクライアントID",sso_client_secret:"SSOクライアントシークレット",sso_compatibility_mode:"SSO互換モード",sso_default_dir:"SSOデフォルトディレクトリ",sso_default_permission:"SSOデフォルトパーミッション",sso_endpoint_name:"SSOエンドポイント名",sso_jwt_public_key:"SSO JWTパブリックキー",sso_login_enabled:"SSOログインを有効化",sso_login_platform:"SSOログインプラットフォーム",sso_login_platforms:{Casdoor:"Casdoor",Dingtalk:"Dingtalk",Github:"GitHub",Google:"Google",Microsoft:"Microsoft",OIDC:"OIDC"},sso_oidc_username_key:"SSO OIDC ユーザーネームキー",sso_organization_name:"SSO組織名",text_types:"テキストの種類",token:"トークン",transmission_seedtime:"送信のシード時間",transmission_uri:"送信URI",version:"バージョン",video_autoplay:"動画を自動再生",video_types:"動画の種類",webauthn_login_enabled:"WebAuthnログインを有効化"},p={aria2:"Aria2",aria2_version:"Aria2のバージョン:",set_aria2:"Aria2を設定",copy_token:"トークンをコピー",reset_token:"トークンをリセット",reset_token_success:"トークンのリセットに成功しました",unknown_type:"不明な種類",set_qbit:"qBittorrentを設定",qbittorrent:"qBittorrent",transmission:"送信",set_transmission:"送信を設定する"},c={common:{mount_path:"マウントのパス","mount_path-tips":"マウント先のパスは一意であり、繰り返す事はできません",driver:"ドライバ",order:"オーダー","order-tips":"並べ替えに使用します",status:"状態",remark:"再マーク",cache_expiration:"キャッシュの有効期限","cache_expiration-tips":"このストレージのキャッシュの有効期限です",down_proxy_url:"ダウンロードプロキシURL",web_proxy:"Webプロキシ",webdav_policy:"WebDAVポリシー",proxy_range:"プロキシの範囲","proxy_range-tips":"プロキシを有効化する必要があります",webdav_policys:{"302_redirect":"302リダイレクト",use_proxy_url:"プロキシURLを使用する",native_proxy:"ネイティブプロキシ"},order_by:"オーダー方法",order_bys:{name:"名前",size:"サイズ",modified:"最終更新"},order_direction:"オーダーの方向",order_directions:{asc:"昇順",desc:"降順"},extract_folder:"フォルダを展開",extract_folders:{front:"手前に展開",back:"後方に展開"},enable_sign:"署名を有効化"},other:{start_load_success:"読み込みを開始",load_all:"すべて再読み込み",filter_by_driver:"ドライバで絞り込む",table_layout:"テーブルのレイアウト"}},u={offline_download:"ファイルをローカルにダウンロード",offline_download_transfer:"ダウンロードしたファイルを対応するストレージに転送",upload:"対応するストレージにファイルをアップロード",copy:"ファイルをストレージから別のストレージにコピー",done:"完了",undone:"実行中",clear_succeeded:"クリアに成功しました",retry:"再試行",retry_failed:"再試行に失敗しました",state:{0:"保留中",1:"実行中",2:"成功しました",3:"キャンセル中",4:"キャンセルしました",5:"エラー",6:"失敗しました",7:"失敗",8:"再試行を待機中",9:"再試行前"}},h={permissions:{see_hides:"非表示を表示",access_without_password:"パスワードなしでアクセス",offline_download:"オフラインダウンロードのタスクに追加",write:"ディレクトリの作成またはアップロード",rename:"名前を変更",move:"移動",copy:"コピー",delete:"削除",webdav_read:"WebDAVを読み取り",webdav_manage:"WebDAVを管理"},username:"ユーザー名",password:"パスワード",base_path:"ベースのパス",role:"ロール",permission:"権限",disabled:"無効",available:"利用可能",update_profile:"プロフィールを更新",update_profile_success:"プロフィールの更新に成功しました。再度ログインをしてください。",change_username:"ユーザー名を変更",change_password:"パスワードを変更","change_password-tips":"パスワードを変更しない場合は空欄のままにしてください",confirm_password:"パスワードの確認","confirm_password-tips":"先ほど入力したパスワードを再入力してください",confirm_password_not_same:"入力したパスワードが異なっています",enable_2fa:"2FAを有効化",cancel_2fa:"2FAを無効化",cancel_2fa_success:"2FAの無効化に成功しました","2fa_already_enabled":"2FAが有効化済み",scan_qr:"QRコードをスキャンしてシークレットキーを保存",or_manual:"または手動でシークレットキーを入力",input_code:"2FAアプリのコードを入力",verify:"認証","guest-tips":"あなたは現在ゲストとして閲覧しています。",modify_nothing:"管理ページでは何も変更できません。",sso_login:"シングルサインオンログイン",connect_sso:"シングルサインオンプラットフォームに接続",disconnect_sso:"シングルサインオンプラットフォームから切断",webauthn:"WebAuthn",add_webauthn:"WebAuthnの資格情報を追加",add_webauthn_success:"WebAuthnの資格情報の追加に成功しました!",webauthn_not_supported:"WebAuthnがブラウザでサポートされていない、または安全でないオリジナルを使用しています"},m=Object.assign({"./br.json":r,"./drivers.json":i,"./global.json":a,"./home.json":t,"./index.json":o,"./indexes.json":s,"./login.json":_,"./manage.json":d,"./metas.json":n,"./settings.json":l,"./settings_other.json":p,"./storages.json":c,"./tasks.json":u,"./users.json":h}),f=e("default",{});for(var k in m)f[k.split("/")[1].split(".")[0]]=m[k]}}}));
